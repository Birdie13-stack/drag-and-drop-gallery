import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {ImageData} from "../ImageData.js"

function ImageContainer() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState(ImageData);

  const handleDrag = (result) => {
    if (!result.destination) return;
    const updatedImages = [...images];
    const [reorderImages] = updatedImages.splice(result.source.index, 1);
    updatedImages.splice(result.destination.index, 0, reorderImages);
    setImages(updatedImages);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search images by tag"
        onChange={(e) => setSearch(e.target.value)}
      />
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="items" direction="horizontal">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="container">
              {images
                .filter((image) => {
                  return search.toLowerCase() === ""
                    ? image
                    : image.tag.includes(search);
                })
                .map((image, index) => (
                  <Draggable
                    draggableId={image.id}
                    key={image.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="image-container"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <img
                          src={image.src}
                          alt={`Image ${image.id}`}
                          className="drag-img"
                        />

                        <div className="tags">
                          <span>{image.tag}</span>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ImageContainer;
