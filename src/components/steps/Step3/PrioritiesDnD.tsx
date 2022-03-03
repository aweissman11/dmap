import { useState } from 'react';
import { Grid, Paper, styled, useTheme } from '@mui/material';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import { prioritiesList } from './Priorities';
import { TPriority, TSelectPriorities } from '../../../types';

interface PrioritiesDnDInterface {
  priorities: TPriority[];
  selectPriorities: TSelectPriorities;
}

type TColumn = {
  items: TPriority[];
  header: string;
  footer: string;
};

type TColumns = {
  [key: string]: TColumn;
};

const PaperPlate = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2, 'auto'),
  padding: theme.spacing(1),
  width: 420,
  maxWidth: '100%',
  minHeight: 500,
  // display: 'flex',
  // flexWrap: 'wrap',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: 404,
    padding: 0,
  },
  [theme.breakpoints.up('lg')]: {
    width: 640,
  },
}));

function PrioritiesDnD(props: PrioritiesDnDInterface) {
  const defaultColumns = {
    [uuid()]: {
      header: 'Priorities',
      footer: '',
      items: prioritiesList.filter(
        ({ id }) => !props.priorities.some(pr => pr.id === id),
      ),
    },
    [uuid()]: {
      header: 'More Important',
      footer: 'Less Important',
      items: props.priorities,
    },
  };

  const theme = useTheme();
  const [columns, setColumns] = useState(defaultColumns);

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
      props.selectPriorities(destItems);
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
      props.selectPriorities(copiedItems);
    }
  };

  return (
    <Grid container justifyContent="space-between" id="dnd-context">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Grid
              item
              md={6}
              xs={12}
              container
              direction="column"
              alignItems="center"
              key={columnId}
            >
              <h2>{column.header}</h2>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <PaperPlate
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: snapshot.isDraggingOver
                          ? theme.palette.primary.main
                          : theme.palette.primary.light,
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
                                  // style={{ width: 640 }}
                                  // style={{
                                  //   userSelect: 'none',
                                  //   padding: 16,
                                  //   margin: '0 0 8px 0',
                                  //   minHeight: '50px',
                                  //   backgroundColor: snapshot.isDragging
                                  //     ? theme.palette.primary.dark
                                  //     : theme.palette.primary.main,
                                  //   color: theme.palette.common.white,
                                  //   ...provided.draggableProps.style,
                                  // }}
                                >
                                  {item.content}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </PaperPlate>
                  );
                }}
              </Droppable>
              {column.footer.length ? <h2>{column.footer}</h2> : null}
            </Grid>
          );
        })}
      </DragDropContext>
    </Grid>
  );
}

export default PrioritiesDnD;
