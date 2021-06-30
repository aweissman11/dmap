import { useState } from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  useTheme,
  Theme,
} from '@material-ui/core';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

// import { cyclist, golfer, pants, shoes } from 'assets';

type TItem = {
  id: string;
  content: string;
};

type TColumn = {
  items: TItem[];
  header: string;
  footer: string;
};

type TColumns = {
  [key: string]: TColumn;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(2, 'auto'),
      padding: theme.spacing(1),
      width: 250,
      minHeight: 500,
    },
  }),
);

// {
//   id: uuid(),
//   content: <img src={} alt={} style={{ width: '50px', height: '50px' }} />,
// },
// {
//   id: uuid(),
//   content: <img src={} alt={} style={{ width: '50px', height: '50px' }} />,
// },
// {
//   id: uuid(),
//   content: <img src={} alt={} style={{ width: '50px', height: '50px' }} />,
// },
// {
//   id: uuid(),
//   content: <img src={} alt={} style={{ width: '50px', height: '50px' }} />,
// },
// {
//   id: uuid(),
//   content: <img src={} alt={} style={{ width: '50px', height: '50px' }} />,
// },
const prioritiesList = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  { id: uuid(), content: 'Third task' },
  { id: uuid(), content: 'Fourth task' },
  { id: uuid(), content: 'Fifth task' },
];

const columnsFromBackend = {
  [uuid()]: {
    header: 'Priorities',
    footer: '',
    items: prioritiesList,
  },
  [uuid()]: {
    header: 'Most Important',
    footer: 'Least Important',
    items: [],
  },
};

const onDragEnd = (
  result: DropResult,
  columns: TColumns,
  setColumns: (columns: TColumns) => void,
): void => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function PrioritiesDnD() {
  const classes = useStyles();
  const theme = useTheme();
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <Grid container justify="space-between">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Grid
              item
              xs={6}
              container
              direction="column"
              alignItems="center"
              key={columnId}
            >
              <h2>{column.header}</h2>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <Paper
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={classes.paper}
                        style={{
                          background: snapshot.isDraggingOver
                            ? theme.palette.secondary.main
                            : theme.palette.common.white,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: 'none',
                                      padding: 16,
                                      margin: '0 0 8px 0',
                                      minHeight: '50px',
                                      backgroundColor: snapshot.isDragging
                                        ? theme.palette.primary.dark
                                        : theme.palette.primary.main,
                                      color: theme.palette.common.white,
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </Paper>
                    );
                  }}
                </Droppable>
              </div>
              {column.footer.length ? <h2>{column.footer}</h2> : null}
            </Grid>
          );
        })}
      </DragDropContext>
    </Grid>
  );
}

export default PrioritiesDnD;
