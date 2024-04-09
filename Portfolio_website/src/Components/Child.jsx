import React, { useState } from 'react';

const Navbar = () => {
  // Define your parent, child, and grandchild arrays
  const parentArray = ['Home', 'About', 'Services', 'Contact'];
  const childArrays = [
    ['Home 1', 'Home 2', 'Home 3'],
    ['About 1', 'About 2', 'About 3'],
    ['Service 1', 'Service 2', 'Service 3'],
    ['Contact 1', 'Contact 2', 'Contact 3']
  ];
  const grandChildArrays = [
    [
      ['Home 1-1', 'Home 1-2', 'Home 1-3'],
      ['Home 2-1', 'Home 2-2', 'Home 2-3'],
      ['Home 3-1', 'Home 3-2', 'Home 3-3']
    ],
    [
      ['About 1-1', 'About 1-2', 'About 1-3'],
      ['About 2-1', 'About 2-2', 'About 2-3'],
      ['About 3-1', 'About 3-2', 'About 3-3']
    ],
    [
      ['Service 1-1', 'Service 1-2', 'Service 1-3'],
      ['Service 2-1', 'Service 2-2', 'Service 2-3'],
      ['Service 3-1', 'Service 3-2', 'Service 3-3']
    ],
    [
      ['Contact 1-1', 'Contact 1-2', 'Contact 1-3'],
      ['Contact 2-1', 'Contact 2-2', 'Contact 2-3'],
      ['Contact 3-1', 'Contact 3-2', 'Contact 3-3']
    ]
  ];

  // State to track the open/close state of each dropdown
  const [isOpen, setIsOpen] = useState(Array(parentArray.length).fill(false));
  const [isChildOpen, setIsChildOpen] = useState(Array(parentArray.length).fill(Array(childArrays[0].length).fill(false)));

  // Function to toggle the open/close state of a dropdown
  const toggleDropdown = (index) => {
    setIsOpen((prevOpenState) => {
      const newState = Array(parentArray.length).fill(false);
      newState[index] = !prevOpenState[index];
      return newState;
    });
  };

  const toggleChildDropdown = (parentIndex, childIndex) => {
    setIsChildOpen((prevOpenState) => {
      const newState = [...prevOpenState];
      newState[parentIndex] = [...prevOpenState[parentIndex]];
      newState[parentIndex][childIndex] = !prevOpenState[parentIndex][childIndex];
      return newState;
    });
  };

  return (
    <nav>
      {/* Map over the parent array */}
      <ul>
        {parentArray.map((parent, parentIndex) => (
          <li key={parentIndex} onClick={() => toggleDropdown(parentIndex)}>
            {parent}
            {/* Render the child array if the dropdown is open */}
            {isOpen[parentIndex] && (
              <ul>
                {/* Map over the corresponding child array */}
                {childArrays[parentIndex].map((child, childIndex) => (
                  <li key={childIndex} onClick={(e) => { e.stopPropagation(); toggleChildDropdown(parentIndex, childIndex); }}>
                    {child}
                    {/* Render the grandchild array if the dropdown is open */}
                    {isChildOpen[parentIndex][childIndex] && (
                      <ul>
                        {/* Map over the corresponding grandchild array */}
                        {grandChildArrays[parentIndex][childIndex].map((grandChild, grandChildIndex) => (
                          <li key={grandChildIndex}>{grandChild}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
