interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Tronco del árbol */}
        <rect x="18" y="20" width="4" height="12" fill="#8B4513" />
        
        {/* Hojas del árbol */}
        <path
          d="M20 8L28 20H12L20 8Z"
          fill="#4CAF50"
        />
        <path
          d="M20 14L26 24H14L20 14Z"
          fill="#2E7D32"
        />
        
        {/* Libro */}
        <path
          d="M14 28H26C26 28 25 30 20 30C15 30 14 28 14 28Z"
          fill="#FFF"
          stroke="#2E7D32"
          strokeWidth="1"
        />
        
        {/* Raíces */}
        <path
          d="M18 32C18 32 16 34 14 34M22 32C22 32 24 34 26 34"
          stroke="#8B4513"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-tight">Raices</span>
        <span className="text-sm leading-tight">de Posadas</span>
      </div>
    </div>
  );
};

export default Logo;
