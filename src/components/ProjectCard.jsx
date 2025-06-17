import React from 'react'

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <div className="group relative bg-navy-blue/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-warm-taupe/20 hover:border-cream/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cream/10">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent-gradient text-charcoal font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105"
          >
            View Project
          </a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-cream group-hover:text-cream transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-warm-taupe mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-1 bg-charcoal/50 text-warm-taupe text-xs font-medium rounded-full border border-warm-taupe/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Decorative Element */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-cream rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

export default ProjectCard 