import React, { useContext, cloneElement, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';

export interface SubMenuProps {
  title: string;
  index?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false;

  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('gk-menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (event: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    event.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const submenuClasses = classNames('gk-submenu', {
      'menu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;

      if (displayName === 'MenuItem') {
        return cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.warn(
          'Warning: Menu has a child  which is not a MenuItem component'
        );
      }
    });

    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={submenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li className={classes} key={index} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
