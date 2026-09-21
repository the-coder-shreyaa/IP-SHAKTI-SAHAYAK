import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function DropdownMenu({
  label = "Actions",
  icon,
  items = [],
  align = "right",
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleItemClick = (item) => {
    if (item.disabled) return;

    setOpen(false);

    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <div
      className={`dropdown-menu-wrapper dropdown-align-${align}`}
      ref={menuRef}
    >
      <button
        type="button"
        className={`dropdown-trigger ${open ? "is-open" : ""}`}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {icon && icon}
        <span>{label}</span>
        <ChevronDown
          size={15}
          className={`dropdown-chevron ${
            open ? "rotate" : ""
          }`}
        />
      </button>

      {open && (
        <div className="dropdown-menu" role="menu">
          {items.map((item, index) => {
            const Icon = item.icon;

            if (item.divider) {
              return (
                <div
                  className="dropdown-divider"
                  key={`divider-${index}`}
                />
              );
            }

            return (
              <button
                type="button"
                key={item.id || item.label || index}
                className={`dropdown-item ${
                  item.danger ? "dropdown-item-danger" : ""
                } ${item.disabled ? "is-disabled" : ""}`}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                role="menuitem"
              >
                {Icon && (
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                  />
                )}

                <span>{item.label}</span>

                {item.shortcut && (
                  <small>{item.shortcut}</small>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;