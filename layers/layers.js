var wms_layers = [];

var format_RW_Mettjrnsbcken_0 = new ol.format.GeoJSON();
var features_RW_Mettjrnsbcken_0 = format_RW_Mettjrnsbcken_0.readFeatures(json_RW_Mettjrnsbcken_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_Mettjrnsbcken_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_Mettjrnsbcken_0.addFeatures(features_RW_Mettjrnsbcken_0);
var lyr_RW_Mettjrnsbcken_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_Mettjrnsbcken_0, 
                style: style_RW_Mettjrnsbcken_0,
                popuplayertitle: 'RW_Mettjärnsbäcken',
                interactive: true,
                title: '<img src="styles/legend/RW_Mettjrnsbcken_0.png" /> RW_Mettjärnsbäcken'
            });
var format_RW_Mettjrnsbcken_Split_1 = new ol.format.GeoJSON();
var features_RW_Mettjrnsbcken_Split_1 = format_RW_Mettjrnsbcken_Split_1.readFeatures(json_RW_Mettjrnsbcken_Split_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_Mettjrnsbcken_Split_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_Mettjrnsbcken_Split_1.addFeatures(features_RW_Mettjrnsbcken_Split_1);
var lyr_RW_Mettjrnsbcken_Split_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_Mettjrnsbcken_Split_1, 
                style: style_RW_Mettjrnsbcken_Split_1,
                popuplayertitle: 'RW_Mettjärnsbäcken_Split',
                interactive: true,
                title: '<img src="styles/legend/RW_Mettjrnsbcken_Split_1.png" /> RW_Mettjärnsbäcken_Split'
            });
var format_RTK_Mettjrnsbcken_2 = new ol.format.GeoJSON();
var features_RTK_Mettjrnsbcken_2 = format_RTK_Mettjrnsbcken_2.readFeatures(json_RTK_Mettjrnsbcken_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTK_Mettjrnsbcken_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTK_Mettjrnsbcken_2.addFeatures(features_RTK_Mettjrnsbcken_2);
var lyr_RTK_Mettjrnsbcken_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTK_Mettjrnsbcken_2, 
                style: style_RTK_Mettjrnsbcken_2,
                popuplayertitle: 'RTK_Mettjärnsbäcken',
                interactive: true,
                title: '<img src="styles/legend/RTK_Mettjrnsbcken_2.png" /> RTK_Mettjärnsbäcken'
            });
var format_Mettjrnens_naturreservat_3 = new ol.format.GeoJSON();
var features_Mettjrnens_naturreservat_3 = format_Mettjrnens_naturreservat_3.readFeatures(json_Mettjrnens_naturreservat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mettjrnens_naturreservat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mettjrnens_naturreservat_3.addFeatures(features_Mettjrnens_naturreservat_3);
var lyr_Mettjrnens_naturreservat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mettjrnens_naturreservat_3, 
                style: style_Mettjrnens_naturreservat_3,
                popuplayertitle: 'Mettjärnens_naturreservat',
                interactive: true,
                title: '<img src="styles/legend/Mettjrnens_naturreservat_3.png" /> Mettjärnens_naturreservat'
            });
var format_Hymo_AMettjrnsbcken_4 = new ol.format.GeoJSON();
var features_Hymo_AMettjrnsbcken_4 = format_Hymo_AMettjrnsbcken_4.readFeatures(json_Hymo_AMettjrnsbcken_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hymo_AMettjrnsbcken_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hymo_AMettjrnsbcken_4.addFeatures(features_Hymo_AMettjrnsbcken_4);
var lyr_Hymo_AMettjrnsbcken_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hymo_AMettjrnsbcken_4, 
                style: style_Hymo_AMettjrnsbcken_4,
                popuplayertitle: 'Hymo_A-Mettjärnsbäcken',
                interactive: true,
                title: '<img src="styles/legend/Hymo_AMettjrnsbcken_4.png" /> Hymo_A-Mettjärnsbäcken'
            });
var format_Diken_5 = new ol.format.GeoJSON();
var features_Diken_5 = format_Diken_5.readFeatures(json_Diken_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diken_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diken_5.addFeatures(features_Diken_5);
var lyr_Diken_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diken_5, 
                style: style_Diken_5,
                popuplayertitle: 'Diken',
                interactive: true,
                title: '<img src="styles/legend/Diken_5.png" /> Diken'
            });
var format_Vgtrumma_tgrd_6 = new ol.format.GeoJSON();
var features_Vgtrumma_tgrd_6 = format_Vgtrumma_tgrd_6.readFeatures(json_Vgtrumma_tgrd_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vgtrumma_tgrd_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vgtrumma_tgrd_6.addFeatures(features_Vgtrumma_tgrd_6);
var lyr_Vgtrumma_tgrd_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vgtrumma_tgrd_6, 
                style: style_Vgtrumma_tgrd_6,
                popuplayertitle: 'Vägtrumma_åtgärd',
                interactive: true,
                title: '<img src="styles/legend/Vgtrumma_tgrd_6.png" /> Vägtrumma_åtgärd'
            });
var format_tgrder_7 = new ol.format.GeoJSON();
var features_tgrder_7 = format_tgrder_7.readFeatures(json_tgrder_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tgrder_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tgrder_7.addFeatures(features_tgrder_7);
var lyr_tgrder_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tgrder_7, 
                style: style_tgrder_7,
                popuplayertitle: 'Åtgärder',
                interactive: true,
                title: '<img src="styles/legend/tgrder_7.png" /> Åtgärder'
            });
var format_Elfiskedata_Mettjrnsbcken_8 = new ol.format.GeoJSON();
var features_Elfiskedata_Mettjrnsbcken_8 = format_Elfiskedata_Mettjrnsbcken_8.readFeatures(json_Elfiskedata_Mettjrnsbcken_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elfiskedata_Mettjrnsbcken_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elfiskedata_Mettjrnsbcken_8.addFeatures(features_Elfiskedata_Mettjrnsbcken_8);
var lyr_Elfiskedata_Mettjrnsbcken_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elfiskedata_Mettjrnsbcken_8, 
                style: style_Elfiskedata_Mettjrnsbcken_8,
                popuplayertitle: 'Elfiskedata_Mettjärnsbäcken',
                interactive: true,
                title: '<img src="styles/legend/Elfiskedata_Mettjrnsbcken_8.png" /> Elfiskedata_Mettjärnsbäcken'
            });
var format_Vattenhastighet_Mettjrnsbcken_9 = new ol.format.GeoJSON();
var features_Vattenhastighet_Mettjrnsbcken_9 = format_Vattenhastighet_Mettjrnsbcken_9.readFeatures(json_Vattenhastighet_Mettjrnsbcken_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vattenhastighet_Mettjrnsbcken_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vattenhastighet_Mettjrnsbcken_9.addFeatures(features_Vattenhastighet_Mettjrnsbcken_9);
var lyr_Vattenhastighet_Mettjrnsbcken_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vattenhastighet_Mettjrnsbcken_9, 
                style: style_Vattenhastighet_Mettjrnsbcken_9,
                popuplayertitle: 'Vattenhastighet_Mettjärnsbäcken',
                interactive: true,
                title: '<img src="styles/legend/Vattenhastighet_Mettjrnsbcken_9.png" /> Vattenhastighet_Mettjärnsbäcken'
            });

lyr_RW_Mettjrnsbcken_0.setVisible(true);lyr_RW_Mettjrnsbcken_Split_1.setVisible(true);lyr_RTK_Mettjrnsbcken_2.setVisible(true);lyr_Mettjrnens_naturreservat_3.setVisible(true);lyr_Hymo_AMettjrnsbcken_4.setVisible(true);lyr_Diken_5.setVisible(true);lyr_Vgtrumma_tgrd_6.setVisible(true);lyr_tgrder_7.setVisible(true);lyr_Elfiskedata_Mettjrnsbcken_8.setVisible(true);lyr_Vattenhastighet_Mettjrnsbcken_9.setVisible(true);
var layersList = [lyr_RW_Mettjrnsbcken_0,lyr_RW_Mettjrnsbcken_Split_1,lyr_RTK_Mettjrnsbcken_2,lyr_Mettjrnens_naturreservat_3,lyr_Hymo_AMettjrnsbcken_4,lyr_Diken_5,lyr_Vgtrumma_tgrd_6,lyr_tgrder_7,lyr_Elfiskedata_Mettjrnsbcken_8,lyr_Vattenhastighet_Mettjrnsbcken_9];
lyr_RW_Mettjrnsbcken_0.set('fieldAliases', {'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'BEARING': 'BEARING', 'SINUOSITY': 'SINUOSITY', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', 'LENGTH_3D': 'LENGTH_3D', 'UUID': 'UUID', 'VattenID': 'VattenID', 'EU_CD': 'EU_CD', 'VISS_MS_CD': 'VISS_MS_CD', 'VNAMN': 'VNAMN', 'CATEGORY': 'CATEGORY', 'HARO': 'HARO', 'DAROID_UT': 'DAROID_UT', 'DISTRICT': 'DISTRICT', 'COMP_AUTH': 'COMP_AUTH', 'COUNTRY': 'COUNTRY', 'WB': 'WB', 'VERSION': 'VERSION', 'URL_VISS': 'URL_VISS', 'Shape_Leng': 'Shape_Leng', 'GVatten': 'GVatten', 'G_EU_CD': 'G_EU_CD', 'G_MS_CD': 'G_MS_CD', });
lyr_RW_Mettjrnsbcken_Split_1.set('fieldAliases', {'LENGTH': 'LENGTH', 'VattenID': 'VattenID', 'VISS_MS_CD': 'VISS_MS_CD', 'URL_VISS': 'URL_VISS', 'Sträcka': 'Sträcka', 'WKT': 'WKT', });
lyr_RTK_Mettjrnsbcken_2.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Y': 'Y', 'X': 'X', 'Elevation': 'Elevation', 'Descriptio': 'Descriptio', 'Ellipsoida': 'Ellipsoida', 'Origin': 'Origin', 'Easting RM': 'Easting RM', 'Northing R': 'Northing R', 'Elevatio_1': 'Elevatio_1', 'Lateral RM': 'Lateral RM', 'Antenna he': 'Antenna he', 'Antenna _1': 'Antenna _1', 'Solution s': 'Solution s', 'Averaging': 'Averaging', 'Averagin_1': 'Averagin_1', 'Samples': 'Samples', 'PDOP': 'PDOP', 'GDOP': 'GDOP', 'Base easti': 'Base easti', 'Base north': 'Base north', 'Base eleva': 'Base eleva', 'Base longi': 'Base longi', 'Base latit': 'Base latit', 'Base ellip': 'Base ellip', 'Baseline': 'Baseline', 'Mount poin': 'Mount poin', 'CS name': 'CS name', 'GPS Satell': 'GPS Satell', 'GLONASS Sa': 'GLONASS Sa', 'Galileo Sa': 'Galileo Sa', 'BeiDou Sat': 'BeiDou Sat', 'QZSS Satel': 'QZSS Satel', });
lyr_Mettjrnens_naturreservat_3.set('fieldAliases', {'NVRID': 'NVRID', 'NAMN': 'NAMN', 'SKYDDSTYP': 'SKYDDSTYP', 'BESLSTATUS': 'BESLSTATUS', 'URSBESLDAT': 'URSBESLDAT', 'IKRAFTDATF': 'IKRAFTDATF', 'URSGALLDAT': 'URSGALLDAT', 'SENGALLDAT': 'SENGALLDAT', 'TILLSYNSMH': 'TILLSYNSMH', 'PROVNMHDIS': 'PROVNMHDIS', 'PROVNMHTIL': 'PROVNMHTIL', 'LAN': 'LAN', 'KOMMUN': 'KOMMUN', 'IUCNKAT': 'IUCNKAT', 'FORVALTARE': 'FORVALTARE', 'AREA_HA': 'AREA_HA', 'LAND_HA': 'LAND_HA', 'VATTEN_HA': 'VATTEN_HA', 'SKOG_HA': 'SKOG_HA', 'GEOSTATUS': 'GEOSTATUS', 'DIARIENR': 'DIARIENR', 'LAGRUM': 'LAGRUM', 'BESLMYND': 'BESLMYND', });
lyr_Hymo_AMettjrnsbcken_4.set('fieldAliases', {'NAME': 'NAME', 'Organisati': 'Organisati', 'Inventerar': 'Inventerar', 'Karterings': 'Karterings', 'Vattendrag': 'Vattendrag', 'Temporärt': 'Temporärt', 'Sträcka_n': 'Sträcka_n', '_Startkoor': '_Startkoor', '_Startko_1': '_Startko_1', '_Stoppkoor': '_Stoppkoor', '_Stoppko_1': '_Stoppko_1', 'Vattenför': 'Vattenför', 'Avvikande': 'Avvikande', 'HyMotyp': 'HyMotyp', 'Tillägg_H': 'Tillägg_H', 'Ursprungli': 'Ursprungli', 'Tillägg_u': 'Tillägg_u', 'Aktiva_öv': 'Aktiva_öv', 'Confinemen': 'Confinemen', 'Confinem_1': 'Confinem_1', 'Dalgången': 'Dalgången', 'Ursprung_1': 'Ursprung_1', 'Planform': 'Planform', 'Längd_(h�': 'Längd_(h�', 'Bredd_mede': 'Bredd_mede', 'Bredd_min': 'Bredd_min', 'Bredd_max': 'Bredd_max', 'Vattendjup': 'Vattendjup', 'Vattendj_1': 'Vattendj_1', 'Areal': 'Areal', 'Häll,_>_4': 'Häll,_>_4', 'Block,_200': 'Block,_200', 'Sten,_63_2': 'Sten,_63_2', 'Grus,_2_63': 'Grus,_2_63', 'Sand,_0,06': 'Sand,_0,06', 'Silt,_0,00': 'Silt,_0,00', 'Ler,_<_0,0': 'Ler,_<_0,0', 'Findetritu': 'Findetritu', 'Grovdetrit': 'Grovdetrit', 'Artificiel': 'Artificiel', 'Lugnflytan': 'Lugnflytan', 'Svagt_str�': 'Svagt_str�', 'Strömmand': 'Strömmand', 'Forsande': 'Forsande', 'Skuggning': 'Skuggning', 'Grov_död': 'Grov_död', 'Grov_dö_1': 'Grov_dö_1', 'Rensning': 'Rensning', 'Kulvertera': 'Kulvertera', 'Utfyllnad': 'Utfyllnad', 'Översväm': 'Översväm', 'Artifici_1': 'Artifici_1', 'Indämt': 'Indämt', 'Avstängd': 'Avstängd', 'Torrfåra': 'Torrfåra', 'Reglerad_v': 'Reglerad_v', 'Påverkan': 'Påverkan', 'Översv�_1': 'Översv�_1', 'Fysisk_på': 'Fysisk_på', 'Dominant_f': 'Dominant_f', 'Stabilitet': 'Stabilitet', 'Åtgärdsb': 'Åtgärdsb', 'Åtgärder': 'Åtgärder', 'Upplagd_na': 'Upplagd_na', 'Upplagd_1': 'Upplagd_1', 'Upplagd_sp': 'Upplagd_sp', 'Upplagd_2': 'Upplagd_2', 'Åtgärd_1': 'Åtgärd_1', 'Utanför_a': 'Utanför_a', 'Sänkt_bas': 'Sänkt_bas', 'Förändra': 'Förändra', 'Inskärnin': 'Inskärnin', 'Aktivt_sv�': 'Aktivt_sv�', 'Recent_ter': 'Recent_ter', 'Sekundära': 'Sekundära', 'Utveckling': 'Utveckling', 'Övrigt': 'Övrigt', 'ELEVATION': 'ELEVATION', });
lyr_Diken_5.set('fieldAliases', {'MAP_NAME': 'MAP_NAME', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', 'LENGTH': 'LENGTH', 'LENGTH_3D': 'LENGTH_3D', 'BEARING': 'BEARING', 'SINUOSITY': 'SINUOSITY', });
lyr_Vgtrumma_tgrd_6.set('fieldAliases', {'MAP_NAME': 'MAP_NAME', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', 'LENGTH': 'LENGTH', 'LENGTH_3D': 'LENGTH_3D', 'BEARING': 'BEARING', 'SINUOSITY': 'SINUOSITY', });
lyr_tgrder_7.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Y': 'Y', 'X': 'X', 'Elevation': 'Elevation', });
lyr_Elfiskedata_Mettjrnsbcken_8.set('fieldAliases', {'Vattendrag': 'Vattendrag', 'Lokalnamn': 'Lokalnamn', 'Elfiskelok': 'Elfiskelok', 'Elfiskel_1': 'Elfiskel_1', 'field_5': 'field_5', 'Elfiskel_2': 'Elfiskel_2', 'field_7': 'field_7', 'Elfiskel_3': 'Elfiskel_3', 'Fiskedatum': 'Fiskedatum', 'Antal utfi': 'Antal utfi', 'Vattendr_1': 'Vattendr_1', 'Lokal-län': 'Lokal-län', 'Lokal-bred': 'Lokal-bred', 'Avfiskad y': 'Avfiskad y', 'Art': 'Art', 'Substrat1': 'Substrat1', 'Substrat2': 'Substrat2', 'Substrat3': 'Substrat3', 'Vatten-has': 'Vatten-has', 'Vattenniv�': 'Vattenniv�', 'VIX-klass': 'VIX-klass', 'Utförare': 'Utförare', 'Ansvarig': 'Ansvarig', 'Syfte': 'Syfte', 'Limnisk va': 'Limnisk va', 'Namn': 'Namn', });
lyr_Vattenhastighet_Mettjrnsbcken_9.set('fieldAliases', {'Sträcka': 'Sträcka', 'Organisati': 'Organisati', 'Inventerar': 'Inventerar', 'Karterings': 'Karterings', 'Vattendrag': 'Vattendrag', 'Start_Y Sw': 'Start_Y Sw', 'Start_X Sw': 'Start_X Sw', 'Vattenför': 'Vattenför', 'HyMotyp': 'HyMotyp', 'Ursprungli': 'Ursprungli', 'Längd (h�': 'Längd (h�', 'Bredd mede': 'Bredd mede', 'Areal': 'Areal', 'Dominerand': 'Dominerand', 'Grov död': 'Grov död', 'Grov dö_1': 'Grov dö_1', 'WKT': 'WKT', });
lyr_RW_Mettjrnsbcken_0.set('fieldImages', {'LAYER': 'TextEdit', 'LENGTH': 'TextEdit', 'BEARING': 'TextEdit', 'SINUOSITY': 'TextEdit', 'STREAM_ID': 'TextEdit', 'IN_FLOW': 'TextEdit', 'OUT_FLOW': 'TextEdit', 'DRAIN_AREA': 'TextEdit', 'LENGTH_3D': 'TextEdit', 'UUID': 'TextEdit', 'VattenID': 'TextEdit', 'EU_CD': 'TextEdit', 'VISS_MS_CD': 'TextEdit', 'VNAMN': 'TextEdit', 'CATEGORY': 'TextEdit', 'HARO': 'TextEdit', 'DAROID_UT': 'TextEdit', 'DISTRICT': 'TextEdit', 'COMP_AUTH': 'TextEdit', 'COUNTRY': 'TextEdit', 'WB': 'TextEdit', 'VERSION': 'TextEdit', 'URL_VISS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GVatten': 'TextEdit', 'G_EU_CD': 'TextEdit', 'G_MS_CD': 'TextEdit', });
lyr_RW_Mettjrnsbcken_Split_1.set('fieldImages', {'LENGTH': '', 'VattenID': '', 'VISS_MS_CD': '', 'URL_VISS': '', 'Sträcka': '', 'WKT': '', });
lyr_RTK_Mettjrnsbcken_2.set('fieldImages', {'Name': '', 'Code': '', 'Y': '', 'X': '', 'Elevation': '', 'Descriptio': '', 'Ellipsoida': '', 'Origin': '', 'Easting RM': '', 'Northing R': '', 'Elevatio_1': '', 'Lateral RM': '', 'Antenna he': '', 'Antenna _1': '', 'Solution s': '', 'Averaging': '', 'Averagin_1': '', 'Samples': '', 'PDOP': '', 'GDOP': '', 'Base easti': '', 'Base north': '', 'Base eleva': '', 'Base longi': '', 'Base latit': '', 'Base ellip': '', 'Baseline': '', 'Mount poin': '', 'CS name': '', 'GPS Satell': '', 'GLONASS Sa': '', 'Galileo Sa': '', 'BeiDou Sat': '', 'QZSS Satel': '', });
lyr_Mettjrnens_naturreservat_3.set('fieldImages', {'NVRID': 'TextEdit', 'NAMN': 'TextEdit', 'SKYDDSTYP': 'TextEdit', 'BESLSTATUS': 'TextEdit', 'URSBESLDAT': 'DateTime', 'IKRAFTDATF': 'DateTime', 'URSGALLDAT': 'DateTime', 'SENGALLDAT': 'DateTime', 'TILLSYNSMH': 'TextEdit', 'PROVNMHDIS': 'TextEdit', 'PROVNMHTIL': 'TextEdit', 'LAN': 'TextEdit', 'KOMMUN': 'TextEdit', 'IUCNKAT': 'TextEdit', 'FORVALTARE': 'TextEdit', 'AREA_HA': 'TextEdit', 'LAND_HA': 'TextEdit', 'VATTEN_HA': 'TextEdit', 'SKOG_HA': 'TextEdit', 'GEOSTATUS': 'TextEdit', 'DIARIENR': 'TextEdit', 'LAGRUM': 'TextEdit', 'BESLMYND': 'TextEdit', });
lyr_Hymo_AMettjrnsbcken_4.set('fieldImages', {'NAME': 'TextEdit', 'Organisati': 'TextEdit', 'Inventerar': 'TextEdit', 'Karterings': 'DateTime', 'Vattendrag': 'TextEdit', 'Temporärt': 'TextEdit', 'Sträcka_n': 'TextEdit', '_Startkoor': 'TextEdit', '_Startko_1': 'TextEdit', '_Stoppkoor': 'TextEdit', '_Stoppko_1': 'TextEdit', 'Vattenför': 'TextEdit', 'Avvikande': 'TextEdit', 'HyMotyp': 'TextEdit', 'Tillägg_H': 'TextEdit', 'Ursprungli': 'TextEdit', 'Tillägg_u': 'TextEdit', 'Aktiva_öv': 'TextEdit', 'Confinemen': 'TextEdit', 'Confinem_1': 'TextEdit', 'Dalgången': 'TextEdit', 'Ursprung_1': 'TextEdit', 'Planform': 'TextEdit', 'Längd_(h�': 'TextEdit', 'Bredd_mede': 'TextEdit', 'Bredd_min': 'TextEdit', 'Bredd_max': 'TextEdit', 'Vattendjup': 'TextEdit', 'Vattendj_1': 'TextEdit', 'Areal': 'TextEdit', 'Häll,_>_4': 'TextEdit', 'Block,_200': 'TextEdit', 'Sten,_63_2': 'TextEdit', 'Grus,_2_63': 'TextEdit', 'Sand,_0,06': 'TextEdit', 'Silt,_0,00': 'TextEdit', 'Ler,_<_0,0': 'TextEdit', 'Findetritu': 'TextEdit', 'Grovdetrit': 'TextEdit', 'Artificiel': 'TextEdit', 'Lugnflytan': 'TextEdit', 'Svagt_str�': 'TextEdit', 'Strömmand': 'TextEdit', 'Forsande': 'TextEdit', 'Skuggning': 'TextEdit', 'Grov_död': 'TextEdit', 'Grov_dö_1': 'TextEdit', 'Rensning': 'TextEdit', 'Kulvertera': 'TextEdit', 'Utfyllnad': 'TextEdit', 'Översväm': 'TextEdit', 'Artifici_1': 'TextEdit', 'Indämt': 'TextEdit', 'Avstängd': 'TextEdit', 'Torrfåra': 'TextEdit', 'Reglerad_v': 'TextEdit', 'Påverkan': 'TextEdit', 'Översv�_1': 'TextEdit', 'Fysisk_på': 'TextEdit', 'Dominant_f': 'TextEdit', 'Stabilitet': 'TextEdit', 'Åtgärdsb': 'TextEdit', 'Åtgärder': 'TextEdit', 'Upplagd_na': 'TextEdit', 'Upplagd_1': 'TextEdit', 'Upplagd_sp': 'TextEdit', 'Upplagd_2': 'TextEdit', 'Åtgärd_1': 'TextEdit', 'Utanför_a': 'TextEdit', 'Sänkt_bas': 'TextEdit', 'Förändra': 'TextEdit', 'Inskärnin': 'TextEdit', 'Aktivt_sv�': 'TextEdit', 'Recent_ter': 'TextEdit', 'Sekundära': 'TextEdit', 'Utveckling': 'TextEdit', 'Övrigt': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_Diken_5.set('fieldImages', {'MAP_NAME': '', 'STREAM_ID': '', 'IN_FLOW': '', 'OUT_FLOW': '', 'DRAIN_AREA': '', 'LENGTH': '', 'LENGTH_3D': '', 'BEARING': '', 'SINUOSITY': '', });
lyr_Vgtrumma_tgrd_6.set('fieldImages', {'MAP_NAME': '', 'STREAM_ID': '', 'IN_FLOW': '', 'OUT_FLOW': '', 'DRAIN_AREA': '', 'LENGTH': '', 'LENGTH_3D': '', 'BEARING': '', 'SINUOSITY': '', });
lyr_tgrder_7.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elevation': 'TextEdit', });
lyr_Elfiskedata_Mettjrnsbcken_8.set('fieldImages', {'Vattendrag': 'TextEdit', 'Lokalnamn': 'TextEdit', 'Elfiskelok': 'TextEdit', 'Elfiskel_1': 'TextEdit', 'field_5': 'TextEdit', 'Elfiskel_2': 'TextEdit', 'field_7': 'TextEdit', 'Elfiskel_3': 'TextEdit', 'Fiskedatum': 'DateTime', 'Antal utfi': 'TextEdit', 'Vattendr_1': 'TextEdit', 'Lokal-län': 'TextEdit', 'Lokal-bred': 'TextEdit', 'Avfiskad y': 'TextEdit', 'Art': 'TextEdit', 'Substrat1': 'TextEdit', 'Substrat2': 'TextEdit', 'Substrat3': 'TextEdit', 'Vatten-has': 'TextEdit', 'Vattenniv�': 'TextEdit', 'VIX-klass': 'TextEdit', 'Utförare': 'TextEdit', 'Ansvarig': 'TextEdit', 'Syfte': 'TextEdit', 'Limnisk va': 'TextEdit', 'Namn': 'TextEdit', });
lyr_Vattenhastighet_Mettjrnsbcken_9.set('fieldImages', {'Sträcka': '', 'Organisati': '', 'Inventerar': '', 'Karterings': '', 'Vattendrag': '', 'Start_Y Sw': '', 'Start_X Sw': '', 'Vattenför': '', 'HyMotyp': '', 'Ursprungli': '', 'Längd (h�': '', 'Bredd mede': '', 'Areal': '', 'Dominerand': '', 'Grov död': '', 'Grov dö_1': '', 'WKT': '', });
lyr_RW_Mettjrnsbcken_0.set('fieldLabels', {'LAYER': 'no label', 'LENGTH': 'no label', 'BEARING': 'no label', 'SINUOSITY': 'no label', 'STREAM_ID': 'no label', 'IN_FLOW': 'no label', 'OUT_FLOW': 'no label', 'DRAIN_AREA': 'no label', 'LENGTH_3D': 'no label', 'UUID': 'no label', 'VattenID': 'no label', 'EU_CD': 'no label', 'VISS_MS_CD': 'no label', 'VNAMN': 'no label', 'CATEGORY': 'no label', 'HARO': 'no label', 'DAROID_UT': 'no label', 'DISTRICT': 'no label', 'COMP_AUTH': 'no label', 'COUNTRY': 'no label', 'WB': 'no label', 'VERSION': 'no label', 'URL_VISS': 'no label', 'Shape_Leng': 'no label', 'GVatten': 'no label', 'G_EU_CD': 'no label', 'G_MS_CD': 'no label', });
lyr_RW_Mettjrnsbcken_Split_1.set('fieldLabels', {'LENGTH': 'no label', 'VattenID': 'no label', 'VISS_MS_CD': 'no label', 'URL_VISS': 'no label', 'Sträcka': 'no label', 'WKT': 'no label', });
lyr_RTK_Mettjrnsbcken_2.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Y': 'no label', 'X': 'no label', 'Elevation': 'no label', 'Descriptio': 'no label', 'Ellipsoida': 'no label', 'Origin': 'no label', 'Easting RM': 'no label', 'Northing R': 'no label', 'Elevatio_1': 'no label', 'Lateral RM': 'no label', 'Antenna he': 'no label', 'Antenna _1': 'no label', 'Solution s': 'no label', 'Averaging': 'no label', 'Averagin_1': 'no label', 'Samples': 'no label', 'PDOP': 'no label', 'GDOP': 'no label', 'Base easti': 'no label', 'Base north': 'no label', 'Base eleva': 'no label', 'Base longi': 'no label', 'Base latit': 'no label', 'Base ellip': 'no label', 'Baseline': 'no label', 'Mount poin': 'no label', 'CS name': 'no label', 'GPS Satell': 'no label', 'GLONASS Sa': 'no label', 'Galileo Sa': 'no label', 'BeiDou Sat': 'no label', 'QZSS Satel': 'no label', });
lyr_Mettjrnens_naturreservat_3.set('fieldLabels', {'NVRID': 'no label', 'NAMN': 'no label', 'SKYDDSTYP': 'no label', 'BESLSTATUS': 'no label', 'URSBESLDAT': 'no label', 'IKRAFTDATF': 'no label', 'URSGALLDAT': 'no label', 'SENGALLDAT': 'no label', 'TILLSYNSMH': 'no label', 'PROVNMHDIS': 'no label', 'PROVNMHTIL': 'no label', 'LAN': 'no label', 'KOMMUN': 'no label', 'IUCNKAT': 'no label', 'FORVALTARE': 'no label', 'AREA_HA': 'no label', 'LAND_HA': 'no label', 'VATTEN_HA': 'no label', 'SKOG_HA': 'no label', 'GEOSTATUS': 'no label', 'DIARIENR': 'no label', 'LAGRUM': 'no label', 'BESLMYND': 'no label', });
lyr_Hymo_AMettjrnsbcken_4.set('fieldLabels', {'NAME': 'no label', 'Organisati': 'no label', 'Inventerar': 'no label', 'Karterings': 'no label', 'Vattendrag': 'no label', 'Temporärt': 'no label', 'Sträcka_n': 'no label', '_Startkoor': 'no label', '_Startko_1': 'no label', '_Stoppkoor': 'no label', '_Stoppko_1': 'no label', 'Vattenför': 'no label', 'Avvikande': 'no label', 'HyMotyp': 'no label', 'Tillägg_H': 'no label', 'Ursprungli': 'no label', 'Tillägg_u': 'no label', 'Aktiva_öv': 'no label', 'Confinemen': 'no label', 'Confinem_1': 'no label', 'Dalgången': 'no label', 'Ursprung_1': 'no label', 'Planform': 'no label', 'Längd_(h�': 'no label', 'Bredd_mede': 'no label', 'Bredd_min': 'no label', 'Bredd_max': 'no label', 'Vattendjup': 'no label', 'Vattendj_1': 'no label', 'Areal': 'no label', 'Häll,_>_4': 'no label', 'Block,_200': 'no label', 'Sten,_63_2': 'no label', 'Grus,_2_63': 'no label', 'Sand,_0,06': 'no label', 'Silt,_0,00': 'no label', 'Ler,_<_0,0': 'no label', 'Findetritu': 'no label', 'Grovdetrit': 'no label', 'Artificiel': 'no label', 'Lugnflytan': 'no label', 'Svagt_str�': 'no label', 'Strömmand': 'no label', 'Forsande': 'no label', 'Skuggning': 'no label', 'Grov_död': 'no label', 'Grov_dö_1': 'no label', 'Rensning': 'no label', 'Kulvertera': 'no label', 'Utfyllnad': 'no label', 'Översväm': 'no label', 'Artifici_1': 'no label', 'Indämt': 'no label', 'Avstängd': 'no label', 'Torrfåra': 'no label', 'Reglerad_v': 'no label', 'Påverkan': 'no label', 'Översv�_1': 'no label', 'Fysisk_på': 'no label', 'Dominant_f': 'no label', 'Stabilitet': 'no label', 'Åtgärdsb': 'no label', 'Åtgärder': 'no label', 'Upplagd_na': 'no label', 'Upplagd_1': 'no label', 'Upplagd_sp': 'no label', 'Upplagd_2': 'no label', 'Åtgärd_1': 'no label', 'Utanför_a': 'no label', 'Sänkt_bas': 'no label', 'Förändra': 'no label', 'Inskärnin': 'no label', 'Aktivt_sv�': 'no label', 'Recent_ter': 'no label', 'Sekundära': 'no label', 'Utveckling': 'no label', 'Övrigt': 'no label', 'ELEVATION': 'no label', });
lyr_Diken_5.set('fieldLabels', {'MAP_NAME': 'no label', 'STREAM_ID': 'no label', 'IN_FLOW': 'no label', 'OUT_FLOW': 'no label', 'DRAIN_AREA': 'no label', 'LENGTH': 'no label', 'LENGTH_3D': 'no label', 'BEARING': 'no label', 'SINUOSITY': 'no label', });
lyr_Vgtrumma_tgrd_6.set('fieldLabels', {'MAP_NAME': 'no label', 'STREAM_ID': 'no label', 'IN_FLOW': 'no label', 'OUT_FLOW': 'no label', 'DRAIN_AREA': 'no label', 'LENGTH': 'no label', 'LENGTH_3D': 'no label', 'BEARING': 'no label', 'SINUOSITY': 'no label', });
lyr_tgrder_7.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Y': 'no label', 'X': 'no label', 'Elevation': 'no label', });
lyr_Elfiskedata_Mettjrnsbcken_8.set('fieldLabels', {'Vattendrag': 'no label', 'Lokalnamn': 'no label', 'Elfiskelok': 'no label', 'Elfiskel_1': 'no label', 'field_5': 'no label', 'Elfiskel_2': 'no label', 'field_7': 'no label', 'Elfiskel_3': 'no label', 'Fiskedatum': 'no label', 'Antal utfi': 'no label', 'Vattendr_1': 'no label', 'Lokal-län': 'no label', 'Lokal-bred': 'no label', 'Avfiskad y': 'no label', 'Art': 'no label', 'Substrat1': 'no label', 'Substrat2': 'no label', 'Substrat3': 'no label', 'Vatten-has': 'no label', 'Vattenniv�': 'no label', 'VIX-klass': 'no label', 'Utförare': 'no label', 'Ansvarig': 'no label', 'Syfte': 'no label', 'Limnisk va': 'no label', 'Namn': 'no label', });
lyr_Vattenhastighet_Mettjrnsbcken_9.set('fieldLabels', {'Sträcka': 'no label', 'Organisati': 'no label', 'Inventerar': 'no label', 'Karterings': 'no label', 'Vattendrag': 'no label', 'Start_Y Sw': 'no label', 'Start_X Sw': 'no label', 'Vattenför': 'no label', 'HyMotyp': 'no label', 'Ursprungli': 'no label', 'Längd (h�': 'no label', 'Bredd mede': 'no label', 'Areal': 'no label', 'Dominerand': 'no label', 'Grov död': 'no label', 'Grov dö_1': 'no label', 'WKT': 'no label', });
lyr_Vattenhastighet_Mettjrnsbcken_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});