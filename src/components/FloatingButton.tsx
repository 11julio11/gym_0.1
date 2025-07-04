import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      {isVisible && (
        <div className={`fixed z-40 bottom-6 right-6 transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-100'}`}>
          {isOpen && (
            <div className="bg-white rounded-lg shadow-xl p-6 mb-4 w-72 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">¿Necesitas ayuda?</h3>
                <button onClick={toggleOpen} className="text-gray-500 hover:text-gray-900">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Estamos aquí para responder tus preguntas. Contáctanos por WhatsApp o envíanos un mensaje.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/346123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white w-full py-2 px-4 rounded flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
                <a 
                  href="#contact" 
                  className="bg-gold text-black w-full py-2 px-4 rounded flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contáctanos
                </a>
              </div>
            </div>
          )}
          
          <button 
            onClick={toggleOpen}
            className={`h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
              isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gold hover:bg-yellow-400'
            }`}
            aria-label="Contacto"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MessageCircle className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButton;