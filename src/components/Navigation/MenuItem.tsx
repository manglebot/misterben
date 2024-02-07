interface MenuItemProps {
  label: string;
  url: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, url }) => {
  return (
    <li>
      <label htmlFor="menu-item">
        <a href={url}>{label}</a>
      </label>
    </li>
  );
};

export default MenuItem;
