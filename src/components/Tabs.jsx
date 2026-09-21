import { useState } from "react";

function Tabs({
  tabs = [],
  activeTab,
  defaultTab,
  onChange,
  variant = "default",
}) {
  const [internalTab, setInternalTab] = useState(
    defaultTab || tabs[0]?.id || ""
  );

  const currentTab = activeTab ?? internalTab;

  const handleChange = (tabId) => {
    if (activeTab === undefined) {
      setInternalTab(tabId);
    }

    if (onChange) {
      onChange(tabId);
    }
  };

  return (
    <div className={`tabs tabs-${variant}`}>
      <div className="tabs-list" role="tablist">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              className={`tab-button ${
                isActive ? "active" : ""
              }`}
              onClick={() => handleChange(tab.id)}
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
            >
              {Icon && (
                <Icon
                  size={16}
                  strokeWidth={1.7}
                />
              )}

              <span>{tab.label}</span>

              {tab.count !== undefined && (
                <span className="tab-count">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;