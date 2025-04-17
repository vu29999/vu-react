import { useEffect, useRef, useState } from "react";
import scrollIcon from '../../assets/images/common/ico-table-scroll.png';

const TableScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [showHelp, setShowHelp] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      setShowHelp(false);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="table-wrap scrollbox" ref={containerRef}>
      {showHelp && (
        <div className="msg-touch-help" >
          <img src={scrollIcon} alt="scroll icon" />
        </div>
      )}
      {children}
    </div>
  );
};

export default TableScroll;
