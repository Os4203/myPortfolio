import React from 'react'

const ProjectCard = ({ title, description, image, tags, link, liveDemo }) => {
  return (
    <div className="group relative bg-navy-blue/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-warm-taupe/20 hover:border-cream/40 transition-all duration-500 sm:hover:scale-105 hover:shadow-2xl hover:shadow-cream/10 h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2 sm:gap-3">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-accent-gradient text-charcoal font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105 text-xs sm:text-sm"
            >
              {liveDemo ? 'GitHub' : 'View Project'}
            </a>
            {liveDemo && (
              <a 
                href={liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 sm:px-4 sm:py-2 bg-cream text-charcoal font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105 text-xs sm:text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-cream group-hover:text-cream transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-warm-taupe mb-4 leading-relaxed text-sm sm:text-base flex-1 line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1 bg-charcoal/50 text-warm-taupe text-xs font-medium rounded-full border border-warm-taupe/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Decorative Element */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-cream rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

export default ProjectCard 