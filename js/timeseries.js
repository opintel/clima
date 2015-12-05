var chart = c3.generate({
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2013-01-01', '2020-01-01', '2025-01-01', '2030-01-01'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Línea Base', 665.3, 791.6, 888.0, 972.9],
            ['Escenario mitigación INDC', 665.3, 733.8, 775.2, 761.5]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    }
});



