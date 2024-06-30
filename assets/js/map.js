import { Map, View } from 'ol';
import { Tile, Group } from 'ol/layer';
import { OSM, BingMaps, StadiaMaps } from 'ol/source';
import { ScaleLine, FullScreen, MousePosition } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
import { createStringXY } from 'ol/coordinate';

// Define base map layers
let osm = new Tile({
    title: "Open Street Map",
    type: "base",
    visible: true,
    source: new OSM()
});

let bingRoads = new Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new BingMaps({
        key: 'AqbDxABFot3cmpxfshRqLmg8UTuPv_bg69Ej3d5AkGmjaJy_w5eFSSbOzoHeN2_H',
        imagerySet: 'Road'
    })
});

let bingAerial = new Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new BingMaps({
        key: 'AqbDxABFot3cmpxfshRqLmg8UTuPv_bg69Ej3d5AkGmjaJy_w5eFSSbOzoHeN2_H',
        imagerySet: 'Aerial'
    })
});

let stadiaWatercolor = new Tile({
    title: "Stadia Watercolor",
    type: "base",
    visible: false,
    source: new StadiaMaps({
        layer: 'stamen_watercolor'
    })
});

let stadiaToner = new Tile({
    title: "Stadia Toner",
    type: "base",
    visible: false,
    source: new StadiaMaps({
        layer: 'stamen_toner'
    })
});

// Map Initialization
let map = new Map({
    target: 'map', // Assuming 'map' is the ID of your <div> element
    layers: [osm, bingRoads, bingAerial, stadiaWatercolor, stadiaToner],
    view: new View({
        center: [0, 0], // Initial center coordinates
        zoom: 2 // Initial zoom level
    })
});

// Add the map controls:
map.addControl(new ScaleLine());
map.addControl(new FullScreen());
map.addControl(
    new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0.0000, 0.0000'
    })
);

// Add LayerSwitcher control
var layerSwitcher = new LayerSwitcher({});
map.addControl(layerSwitcher);
