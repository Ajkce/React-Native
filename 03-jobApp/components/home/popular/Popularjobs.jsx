import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobs.style";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { FlatList } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator
            size={"large"}
            color={COLORS.primary}
          ></ActivityIndicator>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <PopularJobCard item={item}></PopularJobCard>
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          ></FlatList>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
