const Today = {
        'date':'2021/12/11',
        'data':[
            { 
                'id':'1',
                'name':'Temperature',
                'series':[{x:'2:00', y:'65'},{x:'3:00'},{x:'5:00', y:'76'}],
            },
        ]
    }


const Daywise= {
        'date':'2021/12/3',
        'data':[
                { 
                    'id':'1',
                    'name':'Temperature',
                    'series':[{x:'23/8/2021', y:'65'},{x:'27/8/2021', y: '56'},{x:'28/8/2021', y:'76'}],
                },
                {
                    'id':'2',
                    'name':'Voltage',
                    'series':[{x:'23/8/2021',y:'66'},{x:'27/8/2021',y:'78'},{x:'28/8/2021',y:'66'}],
                }
            
        ]
    }


const Monthly = {
        'date':'2021/23/9',
        'data':[
            {
                'id':'1',
                'name':'Voltage',
                'series':[{x:'Mon', y:34},{x:'Tue',y:45},{x:'Wed',y:56},{x:'Thu',y:34},{x:'Fri',y:44},{x:'Sat',y:55},{x:'Sun',y:51}]
            },
            {
                'id':'2',
                'name':'Volt L2',
                'series':[{x:'Mon', y:44},{x:'Tue',y:65},{x:'Wed'},{x:'Thu',y:54},{x:'Fri',y:57},{x:'Sat',y:45},{x:'Sun',y:34}]
            },
            {
                'id':'2',
                'name':'Over Consumption',
                'series':[{x:'Mon', y:40},{x:'Tue',y:55},{x:'Wed',y:44},{x:'Thu',y:33},{x:'Fri',y:50},{x:'Sat',y:65},{x:'Sun',y:54}]
            },
            {
                'id':'2',
                'name':'Volt L1',
                'series':[{x:'Mon', y:44},{x:'Tue',y:50},{x:'Wed',y:38},{x:'Thu',y:64},{x:'Fri',y:47},{x:'Sat',y:35},{x:'Sun',y:54}]
            },
            {
                'id':'2',
                'name':'Energy Meter',
                'series':[{x:'Mon', y:49},{x:'Tue',y:35},{x:'Wed',y:50},{x:'Thu',y:54},{x:'Fri',y:37},{x:'Sat',y:45},{x:'Sun',y:44}]
            }]

    }

const Weekly = {
        'date':'2021/23/9',
        'data':[
            {
                'id':'1',
                'name':'Temperature',
                'series':[{x:'Mon', y:40},{x:'Tue',y:55},{x:'Wed',y:44},{x:'Thu',y:33},{x:'Fri',y:50},{x:'Sat',y:65},{x:'Sun',y:54}]
            },
            {
                'id':'2',
                'name':'Voltage',
                'series':[{x:'Mon', y:34},{x:'Tue',y:45},{x:'Wed',y:56},{x:'Thu',y:34},{x:'Fri',y:44},{x:'Sat',y:55},{x:'Sun',y:51}]
            },
            {
                'id':'3',
                'name':'DC Voltage',
                'series':[{x:'Mon', y:44},{x:'Tue',y:65},{x:'Wed'},{x:'Thu',y:54},{x:'Fri',y:57},{x:'Sat',y:45},{x:'Sun',y:34}]
            },
            {
                'id':'4',
                'name':'Volt',
                'series':[{x:'Mon', y:49},{x:'Tue',y:35},{x:'Wed',y:50},{x:'Thu',y:54},{x:'Fri',y:37},{x:'Sat',y:45},{x:'Sun',y:44}]
            },
            {
                'id':'5',
                'name':'Energy Meter',
                'series':[{x:'Mon', y:49},{x:'Tue',y:35},{x:'Wed',y:50},{x:'Thu',y:54},{x:'Fri',y:37},{x:'Sat',y:45},{x:'Sun',y:44}]
            },
            {
                'id':'6',
                'name':'Over Consumption',
                'series':[{x:'Mon', y:49},{x:'Tue',y:35},{x:'Wed',y:50},{x:'Thu',y:54},{x:'Fri',y:37},{x:'Sat',y:45},{x:'Sun',y:44}]
            },{
                'id':'7',
                'name':'Volt L1',
                'series':[{x:'Mon', y:44},{x:'Tue',y:50},{x:'Wed',y:38},{x:'Thu',y:64},{x:'Fri',y:47},{x:'Sat',y:35},{x:'Sun',y:54}]
            },

        ]
}

 export {Monthly,Today,Daywise,Weekly} 