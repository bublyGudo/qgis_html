var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Expenditure_3 = new ol.format.GeoJSON();
var features_Expenditure_3 = format_Expenditure_3.readFeatures(json_Expenditure_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Expenditure_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Expenditure_3.addFeatures(features_Expenditure_3);
var lyr_Expenditure_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Expenditure_3, 
                style: style_Expenditure_3,
                popuplayertitle: "Expenditure",
                interactive: true,
    title: 'Expenditure<br />\
    <img src="styles/legend/Expenditure_3_0.png" /> 16800 - 81600<br />\
    <img src="styles/legend/Expenditure_3_1.png" /> 81600 - 107000<br />\
    <img src="styles/legend/Expenditure_3_2.png" /> 107000 - 153700<br />\
    <img src="styles/legend/Expenditure_3_3.png" /> 153700 - 993900<br />'
        });
var format_clusters_4 = new ol.format.GeoJSON();
var features_clusters_4 = format_clusters_4.readFeatures(json_clusters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clusters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clusters_4.addFeatures(features_clusters_4);
var lyr_clusters_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clusters_4, 
                style: style_clusters_4,
                popuplayertitle: "clusters",
                interactive: true,
    title: 'clusters<br />\
    <img src="styles/legend/clusters_4_0.png" /> High-High<br />\
    <img src="styles/legend/clusters_4_1.png" /> Low-Low<br />'
        });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_Expenditure_3.setVisible(true);lyr_clusters_4.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_Expenditure_3,lyr_clusters_4];
lyr_Expenditure_3.set('fieldAliases', {'POLY_ID': 'POLY_ID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'PHlth_Exp': 'PHlth_Exp', 'PCT_RUR': 'PCT_RUR', 'PCT_POV': 'PCT_POV', 'PCT_BA': 'PCT_BA', 'PCT_WH': 'PCT_WH', 'LISA_I': 'LISA_I', 'LISA_CL': 'LISA_CL', 'LISA_P': 'LISA_P', });
lyr_clusters_4.set('fieldAliases', {'POLY_ID': 'POLY_ID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'PHlth_Exp': 'PHlth_Exp', 'PCT_RUR': 'PCT_RUR', 'PCT_POV': 'PCT_POV', 'PCT_BA': 'PCT_BA', 'PCT_WH': 'PCT_WH', 'LISA_I': 'LISA_I', 'LISA_CL': 'LISA_CL', 'LISA_P': 'LISA_P', });
lyr_Expenditure_3.set('fieldImages', {'POLY_ID': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'PHlth_Exp': 'Range', 'PCT_RUR': 'TextEdit', 'PCT_POV': 'TextEdit', 'PCT_BA': 'TextEdit', 'PCT_WH': 'TextEdit', 'LISA_I': 'TextEdit', 'LISA_CL': 'TextEdit', 'LISA_P': 'TextEdit', });
lyr_clusters_4.set('fieldImages', {'POLY_ID': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'PHlth_Exp': 'Range', 'PCT_RUR': 'TextEdit', 'PCT_POV': 'TextEdit', 'PCT_BA': 'TextEdit', 'PCT_WH': 'TextEdit', 'LISA_I': 'TextEdit', 'LISA_CL': 'TextEdit', 'LISA_P': 'TextEdit', });
lyr_Expenditure_3.set('fieldLabels', {'POLY_ID': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'COUNTYNS': 'hidden field', 'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'inline label - always visible', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'PHlth_Exp': 'inline label - visible with data', 'PCT_RUR': 'inline label - visible with data', 'PCT_POV': 'inline label - visible with data', 'PCT_BA': 'inline label - visible with data', 'PCT_WH': 'inline label - visible with data', 'LISA_I': 'hidden field', 'LISA_CL': 'hidden field', 'LISA_P': 'hidden field', });
lyr_clusters_4.set('fieldLabels', {'POLY_ID': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'COUNTYNS': 'hidden field', 'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'PHlth_Exp': 'hidden field', 'PCT_RUR': 'hidden field', 'PCT_POV': 'hidden field', 'PCT_BA': 'hidden field', 'PCT_WH': 'hidden field', 'LISA_I': 'hidden field', 'LISA_CL': 'inline label - visible with data', 'LISA_P': 'hidden field', });
lyr_clusters_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});