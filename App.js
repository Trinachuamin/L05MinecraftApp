import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const minecraftData = [
  {
    title: 'Found in: 🏠 Village',
    icon: '🏠', // Emoji or custom icon
    color: '#5C4033',
    data: [
      { name: 'Iron Golem', cardImage: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/0/0d/Iron_Golem.png' },
      { name: 'Villager', cardImage: 'https://toppng.com/uploads/thumbnail/minecraft-villager-farmer-minecraft-villager-no-background-11562914429n3gpmzg4gr.png' },
    ],
  },
  {
    title: 'Found in: 🏹 Outpost',
    icon: '🏹', // Emoji or custom icon
    color: '#5C4033',
    data: [
      { name: 'Pillager', cardImage: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/d/d1/Pillager.png' },
      { name: 'Allay', cardImage: 'https://media.tenor.com/9AG2luUngdcAAAAi/allay-allay-minecraft.gif' },
    ],
  },
  {
    title: 'Found in: 🏰 Mansion',
    icon: '🏰', // Emoji or custom icon
    color: '#5C4033',
    data: [
      { name: 'Evoker', cardImage: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/2/28/Evoker_attacking.png' },
      { name: 'Vex', cardImage: 'https://i.tlauncher.org/images/new-vex-texture-pack-3.png' },
    ],
  },
  {
    title: 'Found in: 🌊 Ocean Temple',
    icon: '🌊', // Emoji or custom icon
    color: '#5C4033',
    data: [
      { name: 'Elder Guardian', cardImage: 'https://us-tuna-sounds-images.voicemod.net/98a7a90a-b5d3-4727-bbac-429da5423599-1673859104752.png' },
      { name: 'Guardian', cardImage: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/f/fd/Guardian.png/1200px-Guardian.png' },
    ],
  },
  {
    title: 'Found in: 🧙‍ Witch Hut',
    icon: '🧙‍♀️', // Emoji or custom icon
    color: '#5C4033',
    data: [
      { name: 'Witch', cardImage: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/e/e6/Witch.png' },
      { name: 'Cat', cardImage: 'https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/2/21/Lying_down_Calico_Cat_with_Red_Collar.png/315px-Lying_down_Calico_Cat_with_Red_Collar.png?version=25acfa6d54a19523cbce2d6a615556e1' },
    ],
  },
];

const renderminecraft = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <View>
        <Text style={styles.Name}>{item.name}</Text>
      </View>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <TouchableOpacity
              style={styles.addButton}
              onPress={() => alert('Mobs that are found in the respective locations!')}
          >
            <Text style={styles.addButtonText}>MINECRAFT MOBS</Text>
          </TouchableOpacity>
        </View>
        <SectionList
            sections={minecraftData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderminecraft}
            renderSectionHeader={({ section }) => (
                <TouchableOpacity
                    style={[styles.sectionHeader, { backgroundColor: section.color }]}
                    onPress={() => {
                      // Display custom messages for each section
                      switch (section.title) {
                        case 'Found in: 🏠 Village':
                          alert('Villagers and Iron Golems can be found in villages!');
                          break;
                        case 'Found in: 🏹 Outpost':
                          alert('Outposts are home to Pillagers and the helpful Allay!');
                          break;
                        case 'Found in: 🏰 Mansion':
                          alert('Mansions are filled with Evokers and Vex mobs!');
                          break;
                        case 'Found in: 🌊 Ocean Temple':
                          alert('Ocean Temples are guarded by Elder Guardians and Guardians!');
                          break;
                        case 'Found in: 🧙‍ Witch Hut':
                          alert('Witch Huts house witches and their loyal cats!');
                          break;
                        default:
                          alert(`You clicked on ${section.title}`);
                      }
                    }}
                >
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </TouchableOpacity>
            )}
        />

      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3C3C', // Dark gray for the base theme, like Minecraft menus.
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#6A994E', // Grass green.
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#2A7221', // Darker green for buttons.
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#2F5233', // Forest green for section headers.
    borderWidth: 2,
    borderColor: '#6A994E', // Grass green for contrast.
    justifyContent: 'center',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10,
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIcon: {
    marginRight: 10,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#D0C3A3', // Beige for inventory slot look.
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7A5C34', // Brown to resemble wood.
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 40,
  },
  cardImage: {
    width: 220,
    height: 280,
    resizeMode: 'contain',
  },
});


export default App;
