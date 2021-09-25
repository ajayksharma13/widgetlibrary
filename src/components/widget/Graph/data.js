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
                'name':'volt1',
                'series':[{x:'Jan', y:'34'},{x:'Aug',y:'56'},{x:'Sep',y:'78'},{x:'Oct'},{x:'Nov',y:'34'},{x:'Dec' , y:'54'}]
            }
        ]

    }

const Weekly = {
        'date':'2021/23/9',
        'data':[
            {
                'id':'1',
                'name':'Voltage',
                'series':[{x:'Mon', y:'34'},{x:'Tue',y:'45'},{x:'Wed',y:'56'},{x:'Thu',y:'34'},{x:'Fri',y:'44'},{x:'Sat',y:'55'},{x:'Sun',y:'55'}]
            },
            {
                'id':'2',
                'name':'DC Voltage',
                'series':[{x:'Mon', y:'44'},{x:'Tue',y:'65'},{x:'Wed'},{x:'Thu',y:'54'},{x:'Fri',y:'57'},{x:'Sat',y:'45'},{x:'Sun',y:'34'}]
            }

        ]
}

 export {Monthly,Today,Daywise,Weekly} 