import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';

interface NavListViewProps {
  menuItems: MenuItemInterface[];
}

export interface MenuItemInterface {
  title: string;
  href?: string;
  hasMoreItems: boolean;
  subItems?: MenuItemInterface[];
  hasBackButton: boolean;
  backButtonText?: string;
}

const NavListView = ({ menuItems }: NavListViewProps) => {
  const [selectedMenuitem, setMenuItem] = useState<MenuItemInterface | null>(null);
  const [menuList, setMenuList] = useState<MenuItemInterface[]>(menuItems);

  const handleClick = (item: MenuItemInterface) => {
    if (item.hasMoreItems) {
      setMenuItem(item);
      setMenuList(item.subItems || menuItems);
    }
  };
  const handleBackClick = () => {
    setMenuItem(null);
    setMenuList(menuItems);
  };

  return (
    <React.Fragment>
      {selectedMenuitem && selectedMenuitem.hasBackButton && (
        <ListItem
          onClick={() => {
            handleBackClick();
          }}
          button
        >
          <ListItemIcon>
            <ArrowBackIosIcon className="text-xs" color="secondary" />
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="apercu">{selectedMenuitem.backButtonText}</Typography>
          </ListItemText>
        </ListItem>
      )}
      {menuList.map((item, idx) => (
        <ListItem
          key={idx}
          onClick={() => {
            handleClick(item);
          }}
          button
        >
          <ListItemText disableTypography>
            <Typography variant="apercu">{item.title}</Typography>
          </ListItemText>
          {item.hasMoreItems && (
            <ListItemIcon>
              <ArrowForwardIosIcon className="text-xs" color="secondary" />
            </ListItemIcon>
          )}
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default NavListView;
