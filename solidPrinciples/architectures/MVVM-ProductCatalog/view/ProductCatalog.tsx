import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { ProductCatalogViewModel } from "../viewmodel/ProductCatalog";
import { Product } from "../model/Product";

const ProductCatalog: React.FC = observer(() => {
  const viewModel = new ProductCatalogViewModel();

  // Añadiendo productos sample al catalogo
  useEffect(() => {
    viewModel.addProduct(new Product("1", "Laptop", 1500, 1));
    viewModel.addProduct(new Product("2", "Phone", 800, 1));
    viewModel.addProduct(new Product("3", "Tablet", 500, 1));
  }, []);

  const updateQuantity = (productId: string, quantity: string) => {
    viewModel.updateQuantity(productId, parseInt(quantity) || 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Catalog</Text>
      <FlatList
        data={viewModel.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productText}>
              {item.name} - ${item.price}
            </Text>
            <Text>Quantity: </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              defaultValue={item.quantity.toString()}
              onChangeText={(value) => updateQuantity(item.id, value)}
            />
          </View>
        )}
      />
      <Text style={styles.total}>
        Total Value: ${viewModel.totalValue.toFixed(2)}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  productText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    width: 50,
    textAlign: "center",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});

export default ProductCatalog;