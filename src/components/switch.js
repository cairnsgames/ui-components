import React, { useState, Children } from "react";

export const Switch = (props) => {
  const { test, children } = props;  
  const arrayChildren = Children.toArray(children);

  const child = arrayChildren.find((child) => {
    return child.props.value === test;
  });

  if (child) {
    return child;
  }

  return arrayChildren.find((child) => {
    return child.type === Default;
  });
};

export const Case = ({ children, value }) => {
  return children;
};

export const Default = ({ children }) => {
    return children;
  };

Switch.Case = Case;
Switch.Default = Default;  

/* I don't want do add container around my cases ! };  
    That way you can write: javascript 
    
    <Switch test={true}>   
        <Case value={true}>     
            <ItAlwaysFeelsRightToBeTrue />   
        </Case>  
        <Case value={false}>       
            <FalseAlarm />    
        </Case>  
    </Switch> 
*/
