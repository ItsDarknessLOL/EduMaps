ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9683230.453677, 2399809.705159, -9657922.240331, 2420355.978362]);
var wms_layers = [];


        var lyr_DarkMatterretina_0 = new ol.layer.Tile({
            'title': 'Dark Matter (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Escuela_1 = new ol.format.GeoJSON();
var features_Escuela_1 = format_Escuela_1.readFeatures(json_Escuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escuela_1.addFeatures(features_Escuela_1);
var lyr_Escuela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escuela_1, 
                style: style_Escuela_1,
                popuplayertitle: 'Escuela',
                interactive: true,
                title: '<img src="styles/legend/Escuela_1.png" /> Escuela'
            });

lyr_DarkMatterretina_0.setVisible(true);lyr_Escuela_1.setVisible(true);
var layersList = [lyr_DarkMatterretina_0,lyr_Escuela_1];
lyr_Escuela_1.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'nombre': 'nombre', 'cct': 'cct', 'id_turno': 'id_turno', 'id_nivel': 'id_nivel', 'tipo_control': 'tipo_control', 'sostenimiento': 'sostenimiento', 'domicilio': 'domicilio', 'colonia': 'colonia', 'codigo_postal': 'codigo_postal', 'longitud': 'longitud', 'latitud': 'latitud', 'id_zona': 'id_zona', });
lyr_Escuela_1.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'nombre': 'TextEdit', 'cct': 'TextEdit', 'id_turno': 'Range', 'id_nivel': 'Range', 'tipo_control': 'TextEdit', 'sostenimiento': 'TextEdit', 'domicilio': 'TextEdit', 'colonia': 'Range', 'codigo_postal': 'Range', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'id_zona': 'Range', });
lyr_Escuela_1.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'nombre': 'no label', 'cct': 'no label', 'id_turno': 'no label', 'id_nivel': 'no label', 'tipo_control': 'no label', 'sostenimiento': 'no label', 'domicilio': 'no label', 'colonia': 'no label', 'codigo_postal': 'no label', 'longitud': 'no label', 'latitud': 'no label', 'id_zona': 'no label', });
lyr_Escuela_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});