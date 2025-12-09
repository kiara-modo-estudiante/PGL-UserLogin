import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Card from "../../components/Card";
import { aboutMeCard } from "../../data/about";

export default function Layout() {
  return (
    <>
      <Card
        title={aboutMeCard.title}
        imageSource={aboutMeCard.image}
        bodyText={aboutMeCard.description}
      />
      <Tabs>
        <Tabs.Screen
          name="about"
          options={{
            headerShown: false,
            title: "Sobre Mí",
            tabBarIcon: () => <FontAwesome5 name="user" size={20} />,
            tabBarLabelStyle: { fontSize: 16 },
          }}
        />
        <Tabs.Screen
          name="repo"
          options={{
            headerShown: false,
            title: "Repositorio",
            tabBarIcon: () => <FontAwesome5 name="globe" size={20} />,
            tabBarLabelStyle: { fontSize: 16 },
          }}
        />
      </Tabs>
    </>
  );
}
