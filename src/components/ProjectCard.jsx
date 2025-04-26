import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ProjectCard = ({ id, title, imageUrl, category }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

  return (
    <>
      <div className="project-card" data-id={id}>
        <div className={`image-gallery ${images.length > 1 ? 'multi-images' : ''}`}>
          {images.map((img, index) => (
            <div 
              key={index}
              className="image-wrapper"
              onClick={() => {
                setSelectedImage(img);
                setShowModal(true);
              }}
            >
              <img src={img} alt={title} className="project-image" />
            </div>
          ))}
        </div>
        {category !== "電繪作品" && title && (
          <h3 className="card-title">{title}</h3>
        )}
      </div>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body>
          <img 
            src={selectedImage} 
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
