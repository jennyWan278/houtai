$(function(){
    //下拉功能
    $('.chart-tog').click(function () {
        if ($(this).parent('li').hasClass('active')) {
            $(this).parent('li').removeClass('active');
            $(this).next().slideUp();
            $(this).children('i').removeClass('open');
        } else {
            $(this).next().slideDown();
            $(this).parent('li').addClass('active');
            $(this).children('i').addClass('open');
        }
    });

    //标签切换
    $('.product-info-tab label input').click(function () {
        if ($(this).parent('label').hasClass('active')) {

        } else {
            $(this).parent('label').addClass('active');
            $(this).parent('label').siblings().removeClass('active');
        }
    });
//报表
        var data = { "gender_ratio": [{ "name": "\u7537", "value": "45" }, { "name": "\u5973", "value": "55" }], "growth_rate": [5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4], "last_purchase_time_distribution": [{ "name": "1\u4e2a\u6708\u5185", "value": "17" }, { "name": "3\u4e2a\u6708\u5185", "value": "32" }, { "name": "\u534a\u5e74\u5185", "value": "55" }, { "name": "1\u5e74\u5185", "value": "78" }, { "name": "3\u5e74\u5185", "value": "98" }], "AUM_distribution": [{ "name": "(0,1000]", "value": "43" }, { "name": "(1000,5000]", "value": "20" }, { "name": "(5000,18000]", "value": "16" }, { "name": "(18000,130000]", "value": "10" }, { "name": "(130000,]", "value": "11" }], "active_distribution": [{ "name": "\u6d41\u5931", "value": "37" }, { "name": "\u4e0d\u6d3b\u8dc3", "value": "25" }, { "name": "\u4e00\u822c\u6d3b\u8dc3", "value": "12" }, { "name": "\u6d3b\u8dc3", "value": "26" }], "age_distribution": [{ "name": "20-29", "value": "20" }, { "name": "30-39", "value": "40" }, { "name": "40-49", "value": "21" }, { "name": "50-60", "value": "15" }, { "name": "\u5176\u4ed6", "value": "4" }], "user_tag": [{ "name": "\u767d\u9886", "value": "12" }, { "name": "\u6709\u5b50\u5973", "value": "34" }, { "name": "\u4f18\u60e0\u654f\u611f", "value": "17" }, { "name": "\u6709\u623f\u6709\u8f66", "value": "11" }, { "name": "\u9ad8\u51c0\u503c", "value": "11" }, { "name": "\u5176\u4ed6", "value": "15" }], "project_info": { "\u8d77\u6295\u989d": "50000", "\u4ea7\u54c1\u6807\u7b7e": ["\u672c\u606f\u6eda\u5b58", "\u5feb\u901f\u5230\u8d26", "\u4e2d\u4ea7\u6700\u7231", "\u6536\u76ca\u9ad8"], "\u671f\u9650": "90" }, "purchase_trend": [9, 13, 5, 6, 7, 7, 11, 12, 8, 5, 5, 12], "yield_rate": { "_12month_data": [5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4], "_6month_data": [5.4, 5.4, 5.4, 5.4, 5.4, 5.4], "_3month_data": [5.4, 5.4, 5.4, 5.4], "_30day_data": [5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4, 5.4] } };

    console.log(data);
    // console.log(data2);
    console.log(data.age_distribution);
    //产品基础信息
    if (document.querySelector('.product-info-right')){

        var myChart = echarts.init(document.querySelector('.product-info-right'));
        var option = {
                title: {
                    text: '产品基础信息',
                    subtext: '收益率:年化收益30%\n\n起投额:5000元\n\n基金经理:平安\n\n\n万份收益(元)|近7日年华百分比',
                    itemGap: 25,
                    x: 'left',
                    textStyle: {
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color: '#4a4a4a'
                    },
                    subtextStyle: {//副标题文本样式{"color": "#aaa"}

                        fontSize: 12,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        lineHeight: 40,
                    },

                },
                color: ['#00b9d2'],
                grid: {
                    x: 30,
                    y: 165,
                    x2: 20,
                    y2: 40,

                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: '#f5f5f5'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#4a4a4a',
                            fontSize: '12'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#aaa',
                            width: 1,   //这里是坐标轴的宽度,可以去掉
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#aaa',
                            fontSize: '12'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#aaa',
                            width: 1,   //这里是坐标轴的宽度,可以去掉
                        }
                    }
                },
                series: [{
                    data :[data.yield_rate._12month_data[0], data.yield_rate._12month_data[1], data.yield_rate._12month_data[2], data.yield_rate._12month_data[3], data.yield_rate._12month_data[4], data.yield_rate._12month_data[5], data.yield_rate._12month_data[6], data.yield_rate._12month_data[7], data.yield_rate._12month_data[8], data.yield_rate._12month_data[9], data.yield_rate._12month_data[10], data.yield_rate._12month_data[11]],
                    type: 'line',
                    areaStyle: {}
                }]
            };
        myChart.setOption(option);
        //近一月
        $('.one-month').click(function () {
            option.series[0].data = [data.yield_rate._30day_data[0], data.yield_rate._30day_data[1], data.yield_rate._30day_data[2], data.yield_rate._30day_data[3], data.yield_rate._30day_data[4], data.yield_rate._30day_data[5], data.yield_rate._30day_data[6], data.yield_rate._30day_data[7], data.yield_rate._30day_data[8], data.yield_rate._30day_data[9], data.yield_rate._30day_data[10], data.yield_rate._30day_data[11], data.yield_rate._30day_data[12], data.yield_rate._30day_data[13], data.yield_rate._30day_data[14]];
            option.xAxis.data=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28]
            myChart.setOption(option);
        });
        //近三月
        $('.three-month').click(function () {
            option.series[0].data = [data.yield_rate._3month_data[0], data.yield_rate._3month_data[1], data.yield_rate._3month_data[2]];
            option.xAxis.data = ['近一月','近两月','近三月'];
            myChart.setOption(option);
        });
        //近六月
        $('.six-month').click(function () {
            option.series[0].data = [data.yield_rate._6month_data[0], data.yield_rate._6month_data[1], data.yield_rate._6month_data[2], data.yield_rate._6month_data[3], data.yield_rate._6month_data[4], data.yield_rate._6month_data[5]];
            option.xAxis.data = ['近一月', '近两月', '近三月','近四月','近五月','近六月'];
            myChart.setOption(option);
        });
        //近一年
        $('.one-year').click(function () {
            option.series[0].data = [data.yield_rate._12month_data[0], data.yield_rate._12month_data[1], data.yield_rate._12month_data[2], data.yield_rate._12month_data[3], data.yield_rate._12month_data[4], data.yield_rate._12month_data[5], data.yield_rate._12month_data[6], data.yield_rate._12month_data[7], data.yield_rate._12month_data[8], data.yield_rate._12month_data[9], data.yield_rate._12month_data[10], data.yield_rate._12month_data[11]];
            option.xAxis.data=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],

            myChart.setOption(option);
        });
        }

    // 用户标签
    if (document.querySelector('.users-tag')){
        var usersTag = echarts.init(document.querySelector('.users-tag'));
        var option1 ={
            title: {
                text: '用户标签',
                x: 'left',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                }
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                itemWidth: 10,    //图例标记的宽度
                itemHeight: 10,   //图例标记的高度
                left: "60%",      //图例的位置
                top: "28%",       //图例的位置
                textStyle: {    //图例文字的样式
                    color: '#aaa',
                    fontSize: 10
                },
                data: [data.user_tag[0].name, data.user_tag[1].name, data.user_tag[2].name, data.user_tag[3].name, data.user_tag[4].name, data.user_tag[5].name]
            },
            color: ['#00b9d2', '#ccf1f6', '#99e3ed', '#33c7db', '#66d5e4','#32b2c2'],
            tooltip: {
                trigger: 'item',
                formatter: "{b} :\n  {c} \n ({d}%)"
            },
            
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['0', '50%'],      //饼图大小
                    center: ['30%', '50%'],    //饼图位置
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{d}%",
                                position: "inner"
                            }
                        }
                    },
                    data: [
                        { value: data.user_tag[0].value, name: data.user_tag[0].name },
                        { value: data.user_tag[1].value, name: data.user_tag[1].name },
                        { value: data.user_tag[2].value, name: data.user_tag[2].name  },
                        { value: data.user_tag[3].value, name: data.user_tag[3].name  },
                        { value: data.user_tag[4].value, name: data.user_tag[4].name  },
                        { value: data.user_tag[5].value, name: data.user_tag[5].name }

                    ]
                }

            ]
        };
        usersTag.setOption(option1);
    }

    //年龄分布
    if (document.querySelector('.age-division')){
        var ageDivision = echarts.init(document.querySelector('.age-division'));
        var option2 ={
            title: {
                text: '年龄分布',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                }
            },
        
            color: ['#ccf1f6', '#99e3ed', '#66d5e4', '#33c7db', '#00b9d2'],
            series: [
                {
                    name: '漏斗图',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 100,
                    width: '60%',
                    height: '60%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'ascending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true,
                            // position: 'inside'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },

                    data: [
                        { value: 20, name: data.age_distribution[4].name},
                        { value: 40, name: data.age_distribution[3].name },
                        { value: 60, name: data.age_distribution[0].name},
                        { value: 80, name: data.age_distribution[2].name },
                        { value: 100, name: data.age_distribution[1].name }
                    ]
                }
            ]
        };
        ageDivision.setOption(option2);
    }

    //活跃分布
    if (document.querySelector('.active-division')){
        var activeDivision= echarts.init(document.querySelector('.active-division'));
        var option3 = {
            title: {
                text: '活跃分布',
                x: 'left',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color:'#4a4a4a'
                },
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                itemWidth: 10,    //图例标记的宽度
                itemHeight: 10,   //图例标记的高度
                left: "62%",      //图例的位置
                top: "28%",       //图例的位置
                textStyle: {    //图例文字的样式
                    color: '#aaa',
                    fontSize: 10
                },
                data: [data.active_distribution[0].name, data.active_distribution[1].name, data.active_distribution[2].name, data.active_distribution[3].name]
            },
            color: ['#00b9d2', '#ccf1f6', '#99e3ed', '#33c7db', '#66d5e4'],
            tooltip: {
                trigger: 'item',
                formatter: "{b} :\n  {c} \n ({d}%)"
            },

            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['0', '50%'],      //饼图大小
                    center: ['33%', '50%'],    //饼图位置
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{d}%",
                                position: "inner"
                            }
                        }
                    },
                    data: [
                        { value: data.active_distribution[0].value, name: data.active_distribution[0].name },
                        { value: data.active_distribution[1].value, name: data.active_distribution[1].name},
                        { value: data.active_distribution[2].value, name: data.active_distribution[2].name },
                        { value: data.active_distribution[3].value, name: data.active_distribution[3].name},
                    ]
                }

            ]
        };
        activeDivision.setOption(option3);
    }

    //行内aum
    if (document.querySelector('.aum')){
        var aum = echarts.init(document.querySelector('.aum'));
        var option4 = {
            title: {
                text: '行内AUM',
                x: 'left',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                },
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                itemWidth: 10,    //图例标记的宽度
                itemHeight: 10,   //图例标记的高度
                left: "50%",      //图例的位置
                top: "28%",       //图例的位置
                textStyle: {    //图例文字的样式
                    color: '#aaa',
                    fontSize: 10
                },
                data: [data.AUM_distribution[0].name, data.AUM_distribution[1].name, data.AUM_distribution[2].name, data.AUM_distribution[3].name, data.AUM_distribution[4].name]
            },
            color: ['#00b9d2', '#ccf1f6', '#99e3ed', '#33c7db', '#66d5e4'],
            tooltip: {
                trigger: 'item',
                formatter: "{b} :\n  {c} \n ({d}%)"
            },

            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['0', '50%'],      //饼图大小
                    center: ['25%', '50%'],    //饼图位置
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{d}%",
                                position: "inner"
                            }
                        }
                    },
                    data: [
                    { value: data.AUM_distribution[0].value, name: data.AUM_distribution[0].name},
                    { value: data.AUM_distribution[1].value, name: data.AUM_distribution[1].name },
                    { value: data.AUM_distribution[2].value, name: data.AUM_distribution[2].name },
                    { value: data.AUM_distribution[3].value, name: data.AUM_distribution[3].name },
                    { value: data.AUM_distribution[4].value, name: data.AUM_distribution[4].name }
                    ]
                }

            ]
        };
        aum.setOption(option4);
    }

    //增长率
    if (document.querySelector('.up-rate')){
        var upRate = echarts.init(document.querySelector('.up-rate'));
        var option5 = {
            title: {
                text: '增长率',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                }
            },
            grid: {
                x: 30,
                y: 70,
                x2: 20,
                y2: 50,

            },
            
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#f5f5f5'
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: '#4a4a4a',
                        fontSize: '8'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,

                    textStyle: {
                        color: '#aaa',
                        fontSize: '8',
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                }
            },
            series: [
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    color:'#00b9d2',
                    data: [data.growth_rate[0], data.growth_rate[1], data.growth_rate[2], data.growth_rate[3], data.growth_rate[4], data.growth_rate[5], data.growth_rate[6], data.growth_rate[7], data.growth_rate[8], data.growth_rate[9], data.growth_rate[10], data.growth_rate[11]]
                },

            ]
        };
        upRate.setOption(option5);
    }

    //金融产品购买趋势
    if (document.querySelector('.buy-rate')){
        var byRate = echarts.init(document.querySelector('.buy-rate'));

        var option6 = {
            title: {
                text: '金融产品购买趋势',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                }
            },
            grid: {
                x: 30,
                y: 70,
                x2: 20,
                y2: 50,

            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#f5f5f5'
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    rotate:-30,
                    textStyle: {
                        color: '#4a4a4a',
                        fontSize: '12'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#aaa',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                },
            },
            yAxis: [{
                type: 'value',
                min:0,
                max:100,
                interval:20,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: '{value} %',
                    textStyle: {
                        color: '#aaa',
                        fontSize: '8',
                    }
                },
                /* axisLine: {
                    lineStyle: {
                        color: '#aaa',
                        width: 1,   //这里是坐标轴的宽度,可以去掉
                    }
                } */
            }],
            series: [
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    color: '#00b9d2',
                    data: [data.purchase_trend[0], data.purchase_trend[1], data.purchase_trend[2], data.purchase_trend[3], data.purchase_trend[4], data.purchase_trend[5], data.purchase_trend[6], data.purchase_trend[7], data.purchase_trend[8], data.purchase_trend[9], data.purchase_trend[10], data.purchase_trend[11]]
                },
            ]
        };
        byRate.setOption(option6);
    }

    //上次购买时间
    if (document.querySelector('.buy-time')){
        var buyTime = echarts.init(document.querySelector('.buy-time'));

        var option7 = {
            title: {
                text: '上次购买时间',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                }
            },
            color: ['#00b9d2'],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        rotate:-30,
                        textStyle: {
                            color: '#4a4a4a',
                            fontSize: '6'
                        }
                    },
                    data: [data.last_purchase_time_distribution[0].name, data.last_purchase_time_distribution[1].name, data.last_purchase_time_distribution[2].name, data.last_purchase_time_distribution[3].name, data.last_purchase_time_distribution[4].name],
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 100,
                    axisLabel: {
                        show: true,
                        formatter: '{value} %',
                        textStyle: {
                            color: '#aaa',
                            fontSize: '12',
                        }
                    },
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [data.last_purchase_time_distribution[0].value, data.last_purchase_time_distribution[1].value, data.last_purchase_time_distribution[2].value, data.last_purchase_time_distribution[3].value, data.last_purchase_time_distribution[4].value]
                }
            ]
        };

        buyTime.setOption(option7);
    }

    //分行所属
    if (document.querySelector('.branch')) {
        var branch = echarts.init(document.querySelector('.branch'));
        var option8 = {
            title: {
                text: '分行所属',
                textStyle: {
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: '#4a4a4a'
                }
            },
            color: ['#00b9d2'],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['广州分行', '深圳分行', '上海分行'],

                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            color: '#4a4a4a',
                            fontSize: '8'
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 100,
                    axisLabel: {
                        show: true,
                        formatter: '{value} %',
                        textStyle: {
                            color: '#aaa',
                            fontSize: '10',
                        }
                    },
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '40%',
                    data: [25, 50, 100]
                },
            ]
        };
        branch.setOption(option8);
    };

    //性别比例
    if (document.querySelector('.sex-rate')){
        var sexMen = $('.sex-rate-men');
        var sexWomen = $('.sex-rate-women')
        var frg=document.createDocumentFragment();
        var frgt=document.createDocumentFragment();
        var frgf = document.createDocumentFragment();
        var menRate = data.gender_ratio[0].value;
        var womenRate = data.gender_ratio[1].value;
        var men = Math.floor(menRate / 10);
        var women = Math.ceil(womenRate / 10);
        var menPre = (menRate/ 100).toFixed(2)*100;
        var womenPre = 100 - menPre;
        console.log(menPre);
        for (i = 0; i < men; i++) {
            var menTrue = $('<i class="men-true"></i>');
            var womenFalse = $('<i class="women-false"></i>');
            $(frg).append(menTrue);
            $(frgf).append(womenFalse);
        }
        for (i = 0; i < women; i++) {
            var menFalse = $('<i class="men-false"></i>');
            var womenTrue = $('<i class="women-true"></i>');
            $(frg).append(menFalse);
            $(frgt).append(womenTrue);
        }
        sexMen.append(frg);
        $('.sex-rate-men .rate').text(menPre+'%');
        sexWomen.append(frgt).append(frgf);
        $('.sex-rate-women .rate').text(womenPre+'%');
    }
    
});