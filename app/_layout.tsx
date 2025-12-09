import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="portfolio"
        options={{
          drawerLabel: "Portfolio",
          title: "Portfolio",
        }}
      />
      <Drawer.Screen
        name="books"
        options={{
          drawerLabel: "Libros",
          title: "Libros",
        }}
      />
    </Drawer>
  );
}
