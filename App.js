import React, { useState } from 'react';
import { View,FlatList,Modal,Text,StyleSheet,Pressable,SafeAreaView,ScrollView } from 'react-native';
import RecipeCard from './componentes/RecipeCard';

const receitas = [
  {
    id: '1',
    title: 'Sushi',
    description: 'Arroz temperado com peixe cru.',
    ingredients: 'Arroz, Vinagre de arroz, Nori, Peixe cru (salmão, atum)',
    method: 'Cozinhe o arroz, tempere, monte com peixe sobre a alga e enrole.',
    image: require('./assets/sushi.jpg'),
  },
  {
    id: '2',
    title: 'Tempurá',
    description: 'Legumes e frutos do mar empanados e fritos.',
    ingredients: 'Camarão, Berinjela, Abóbora, Farinha, Água gelada',
    method: 'Misture a massa, empane os ingredientes e frite em óleo quente.',
    image: require('./assets/tempura.jpg'),
  },
  {
    id: '3',
    title: 'Ramen',
    description: 'Sopa japonesa com macarrão e caldo saboroso.',
    ingredients: 'Macarrão, Caldo de porco, Ovo, Alga, Cebolinha',
    method: 'Ferva o caldo, cozinhe o macarrão e monte os ingredientes no bowl.',
    image: require('./assets/ramen.jpg'),
  },
];

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={receitas}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={openModal} />
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalTitle}>{selectedRecipe?.title}</Text>
              <Text style={styles.modalSubTitle}>Ingredientes:</Text>
              <Text style={styles.modalText}>{selectedRecipe?.ingredients}</Text>
              <Text style={styles.modalSubTitle}>Modo de preparo:</Text>
              <Text style={styles.modalText}>{selectedRecipe?.method}</Text>
            </ScrollView>
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    padding: 20,
  },
  modalView: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B22222',
    marginBottom: 10,
  },
  modalSubTitle: {
    fontSize: 18,
    color: '#8B0000',
    marginTop: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#B22222',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

