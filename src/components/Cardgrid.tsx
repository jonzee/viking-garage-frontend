import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    width: 500,
    height: 370,
  },
};

const img = 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Honda-CRF-450R-Motocross-Bike-PNG-Image.png';

const tilesData = [
  {
    title: 'Breakfast',
    author: 'jill111',
    img: img,
  },
  {
    title: 'Tasty burger',
    author: 'pashminu',
    img: img,
  },
  {
    title: 'Camera',
    author: 'Danson67',
    img: img,
  },
  {
    title: 'Morning',
    author: 'fancycrave1',
    img: img,
  },
  {
    title: 'Hats',
    author: 'Hans',
    img: img,
  },
  {
    title: 'Honey',
    author: 'fancycravel',
    img: img,
  },
  {
    title: 'Vegetables',
    author: 'jill111',
    img: img,
  },
  {
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    img: img,
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root as any}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          style={{margin: 20}}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
