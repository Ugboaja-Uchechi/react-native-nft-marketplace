import { useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.cover}>
          <FlatList 
            data={nftData} 
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={styles.background}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex:1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    zIndex: 0,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
});

export default Home;