import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { isLoading } from 'expo-font'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ): error? (
          <Text> Something went wrong</Text>
          ) : (
              <FlatList
                data={[{ job_info: 1, job_id: 1 }, { job_info: 2, job_id: 2 }, { job_info: 3, job_id: 3 }, { job_info: 4, job_id: 4 }]}
                renderItem={({item}) => (
                  <PopularJobCard
                    item={item.job_info}
                  />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
              />
        )}
      </View>
    </View>
  )
}

export default Popularjobs