import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { thumbnailStyle, headerContentStyle } from '../styles/AlbumDetail';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
