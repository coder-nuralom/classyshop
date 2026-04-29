import React from "react";

const CategoryItem = React.memo(({ item, openIds, toggleCategory, level }) => {
  const isOpen = openIds.includes(item._id);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div style={{ marginLeft: `${level * 12}px` }}>
      <div
        onClick={() => hasChildren && toggleCategory(item._id)}
        className="flex justify-between px-3 py-2 cursor-pointer"
      >
        {item.name}
      </div>

      {hasChildren && (
        <Collapse isOpened={isOpen}>
          {item.children.map((child) => (
            <CategoryItem
              key={child._id}
              item={child}
              level={level + 1}
              openIds={openIds}
              toggleCategory={toggleCategory}
            />
          ))}
        </Collapse>
      )}
    </div>
  );
});

export default CategoryItem;
