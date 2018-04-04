// 三级级联下拉框
window.onload = function () {
    var area = document.getElementById('belong');
    if(area){
        var aslt = area.getElementsByTagName('select')[1];
        // var aotn = aslt.getElementsByTagName('option')[1];
        aslt.onchange = function () {
            turnCity();
        }
    }
}
function turn() {
        var provinceList = new Array();
        provinceList['请选择分行'] = ["请选择支行"];
        provinceList['分行001'] = ["请选择支行", "支行00101", "支行00102", "支行00103", "支行00104", "支行00105", "支行00106", "支行00107","支行00108", "支行00109",];
        provinceList['分行002'] = ["请选择支行", "支行00201", "支行00202", "支行00203", "支行00204", "支行00205", "支行00206", "支行00207", "支行00208", "支行00209",];
        provinceList['分行003'] = ["请选择支行", "支行00301", "支行00302", "支行00303", "支行00304", "支行00305", "支行00306", "支行00307", "支行00308", "支行00309",];
        provinceList['分行004'] = ["请选择支行", "支行00401", "支行00402", "支行00403", "支行00404", "支行00405", "支行00406", "支行00407", "支行00408", "支行00409",];
        provinceList['分行005'] = ["请选择支行", "支行00501", "支行00502", "支行00503", "支行00504", "支行00505", "支行00506", "支行00507", "支行00508", "支行00509",];
        provinceList['分行006'] = ["请选择支行", "支行00601", "支行00602", "支行00603", "支行00604", "支行00605", "支行00606", "支行00607", "支行00608", "支行00609",];
        provinceList['分行007'] = ["请选择支行", "支行00701", "支行00702", "支行00703", "支行00704", "支行00705", "支行00706", "支行00707", "支行00708", "支行00709",];
        provinceList['分行008'] = ["请选择支行", "支行00801", "支行00802", "支行00803", "支行00804", "支行00805", "支行00806", "支行00807", "支行00808", "支行00809",];
        provinceList['分行009'] = ["请选择支行", "支行00901", "支行00902", "支行00903", "支行00904", "支行00905", "支行00906", "支行00907", "支行00908", "支行00909",];

    var branch = document.forms[0].branch;//文档中的第一个省份；
    branch.options.length = 0;//把province下拉列表的选项清0
        var index = document.forms[0].sub.value; //文档中的第一个国家；
    branch.options.length = 0;
        for (var j in provinceList[index]) {
            newOption = new Option(provinceList[index][j], provinceList[index][j]);
            branch.options.add(newOption);
            var hall = document.forms[0].hall;//文档中的第一个市区；
            hall.options.length = 1;//把city下拉列表的选项清0
        }
};
function turnCity() {
    var cityList = new Array();
    cityList['请选择支行'] = ["请选择营业厅"];
    cityList['支行00101'] = ["请选择营业厅","营业厅0010101","营业厅0010102", "营业厅0010103", "营业厅0010104", "营业厅0010105", "营业厅0010106", "营业厅0010107", "营业厅0010108", "营业厅0010109",];
    cityList['支行00102'] = ["请选择营业厅","营业厅0010201", "营业厅0010202", "营业厅0010203", "营业厅0010204", "营业厅0010205", "营业厅0010206", "营业厅0010207", "营业厅0010208", "营业厅0010209",];
    cityList['支行00103'] = ["请选择营业厅","营业厅0010301", "营业厅0010302", "营业厅0010303", "营业厅0010304", "营业厅0010305", "营业厅0010306", "营业厅0010307", "营业厅0010308", "营业厅0010309",];
    cityList['支行00104'] = ["请选择营业厅","营业厅0010401", "营业厅0010402", "营业厅0010403", "营业厅0010404", "营业厅0010405", "营业厅0010406", "营业厅0010407", "营业厅0010408", "营业厅0010409",];
    cityList['支行00105'] = ["请选择营业厅","营业厅0010501", "营业厅0010502", "营业厅0010503", "营业厅0010504", "营业厅0010505", "营业厅0010506", "营业厅0010507", "营业厅0010508", "营业厅0010509",];
    cityList['支行00106'] = ["请选择营业厅","营业厅0010601", "营业厅0010602", "营业厅0010603", "营业厅0010604", "营业厅0010605", "营业厅0010606", "营业厅0010607", "营业厅0010608", "营业厅0010609",];
    cityList['支行00107'] = ["请选择营业厅","营业厅0010701", "营业厅0010702", "营业厅0010703", "营业厅0010704", "营业厅0010705", "营业厅0010706", "营业厅0010707", "营业厅0010708", "营业厅0010709",];
    cityList['支行00108'] = ["请选择营业厅","营业厅0010801", "营业厅0010802", "营业厅0010703", "营业厅0010804", "营业厅0010805", "营业厅0010806", "营业厅0010807", "营业厅0010808", "营业厅0010809",];
    cityList['支行00109'] = ["请选择营业厅","营业厅0010901", "营业厅0010902", "营业厅0010803", "营业厅0010904", "营业厅0010905", "营业厅0010906", "营业厅0010907", "营业厅0010908", "营业厅0010909",];

    cityList['支行00201'] = ["请选择营业厅","营业厅0020101", "营业厅0020102", "营业厅0020103", "营业厅0020104", "营业厅0020105", "营业厅0020106", "营业厅0020107", "营业厅0020108", "营业厅0020109",];
    cityList['支行00202'] = ["请选择营业厅","营业厅0020201", "营业厅0020202", "营业厅0020203", "营业厅0020204", "营业厅0020205", "营业厅0020206", "营业厅0020207", "营业厅0020208", "营业厅0020209",];
    cityList['支行00203'] = ["请选择营业厅","营业厅0020301", "营业厅0020302", "营业厅0020303", "营业厅0020304", "营业厅0020305", "营业厅0020306", "营业厅0020307", "营业厅0020308", "营业厅0020309",];
    cityList['支行00204'] = ["请选择营业厅","营业厅0020401", "营业厅0020402", "营业厅0020403", "营业厅0020404", "营业厅0020405", "营业厅0020406", "营业厅0020407", "营业厅0020408", "营业厅0020409",];
    cityList['支行00205'] = ["请选择营业厅","营业厅0020501", "营业厅0020502", "营业厅0020503", "营业厅0020504", "营业厅0020505", "营业厅0020506", "营业厅0020507", "营业厅0020508", "营业厅0020509",];
    cityList['支行00206'] = ["请选择营业厅","营业厅0020601", "营业厅0020602", "营业厅0020603", "营业厅0020604", "营业厅0020605", "营业厅0020606", "营业厅0020607", "营业厅0020608", "营业厅0020609",];
    cityList['支行00207'] = ["请选择营业厅","营业厅0020701", "营业厅0020702", "营业厅0020703", "营业厅0020704", "营业厅0020705", "营业厅0020706", "营业厅0020707", "营业厅0020708", "营业厅0020709",];
    cityList['支行00208'] = ["请选择营业厅","营业厅0020801", "营业厅0020802", "营业厅0020703", "营业厅0020804", "营业厅0020805", "营业厅0020806", "营业厅0020807", "营业厅0020808", "营业厅0020809",];
    cityList['支行00209'] = ["请选择营业厅","营业厅0020901", "营业厅0020902", "营业厅0020803", "营业厅0020904", "营业厅0020905", "营业厅0020906", "营业厅0020907", "营业厅0020908", "营业厅0020909",];

    cityList['支行00301'] = ["请选择营业厅","营业厅0030101", "营业厅0030102", "营业厅0030103", "营业厅0030104", "营业厅0030105", "营业厅0030106", "营业厅0030107", "营业厅0030108", "营业厅0030109",];
    cityList['支行00302'] = ["请选择营业厅","营业厅0030201", "营业厅0030202", "营业厅0030203", "营业厅0030204", "营业厅0030205", "营业厅0030206", "营业厅0030207", "营业厅0030208", "营业厅0030209",];
    cityList['支行00303'] = ["请选择营业厅","营业厅0030301", "营业厅0030302", "营业厅0030303", "营业厅0030304", "营业厅0030305", "营业厅0030306", "营业厅0030307", "营业厅0030308", "营业厅0030309",];
    cityList['支行00304'] = ["请选择营业厅","营业厅0030401", "营业厅0030402", "营业厅0030403", "营业厅0030404", "营业厅0030405", "营业厅0030406", "营业厅0030407", "营业厅0030408", "营业厅0030409",];
    cityList['支行00305'] = ["请选择营业厅","营业厅0030501", "营业厅0030502", "营业厅0030503", "营业厅0030504", "营业厅0030505", "营业厅0030506", "营业厅0030507", "营业厅0030508", "营业厅0030509",];
    cityList['支行00306'] = ["请选择营业厅","营业厅0030601", "营业厅0030602", "营业厅0030603", "营业厅0030604", "营业厅0030605", "营业厅0030606", "营业厅0030607", "营业厅0030608", "营业厅0030609",];
    cityList['支行00307'] = ["请选择营业厅","营业厅0030701", "营业厅0030702", "营业厅0030703", "营业厅0030704", "营业厅0030705", "营业厅0030706", "营业厅0030707", "营业厅0030708", "营业厅0030709",];
    cityList['支行00308'] = ["请选择营业厅","营业厅0030801", "营业厅0030802", "营业厅0030703", "营业厅0030804", "营业厅0030805", "营业厅0030806", "营业厅0030807", "营业厅0030808", "营业厅0030809",];
    cityList['支行00309'] = ["请选择营业厅","营业厅0030901", "营业厅0030902", "营业厅0030803", "营业厅0030904", "营业厅0030905", "营业厅0030906", "营业厅0030907", "营业厅0030908", "营业厅0030909",];

    cityList['支行00401'] = ["请选择营业厅","营业厅0040101", "营业厅0040102", "营业厅0040103", "营业厅0040104", "营业厅0040105", "营业厅0040106", "营业厅0040107", "营业厅0040108", "营业厅0040109",];
    cityList['支行00402'] = ["请选择营业厅","营业厅0040201", "营业厅0040202", "营业厅0040203", "营业厅0040204", "营业厅0040205", "营业厅0040206", "营业厅0040207", "营业厅0040208", "营业厅0040209",];
    cityList['支行00403'] = ["请选择营业厅","营业厅0040301", "营业厅0040302", "营业厅0040303", "营业厅0040304", "营业厅0040305", "营业厅0040306", "营业厅0040307", "营业厅0040308", "营业厅0040309",];
    cityList['支行00404'] = ["请选择营业厅","营业厅0040401", "营业厅0040402", "营业厅0040403", "营业厅0040404", "营业厅0040405", "营业厅0040406", "营业厅0040407", "营业厅0040408", "营业厅0040409",];
    cityList['支行00405'] = ["请选择营业厅","营业厅0040501", "营业厅0040502", "营业厅0040503", "营业厅0040504", "营业厅0040505", "营业厅0040506", "营业厅0040507", "营业厅0040508", "营业厅0040509",];
    cityList['支行00406'] = ["请选择营业厅","营业厅0040601", "营业厅0040602", "营业厅0040603", "营业厅0040604", "营业厅0040605", "营业厅0040606", "营业厅0040607", "营业厅0040608", "营业厅0040609",];
    cityList['支行00407'] = ["请选择营业厅","营业厅0040701", "营业厅0040702", "营业厅0040703", "营业厅0040704", "营业厅0040705", "营业厅0040706", "营业厅0040707", "营业厅0040708", "营业厅0040709",];
    cityList['支行00408'] = ["请选择营业厅","营业厅0040801", "营业厅0040802", "营业厅0040703", "营业厅0040804", "营业厅0040805", "营业厅0040806", "营业厅0040807", "营业厅0040808", "营业厅0040809",];
    cityList['支行00409'] = ["请选择营业厅","营业厅0040901", "营业厅0040902", "营业厅0040803", "营业厅0040904", "营业厅0040905", "营业厅0040906", "营业厅0040907", "营业厅0040908", "营业厅0040909",];

    cityList['支行00501'] = ["请选择营业厅","营业厅0050101", "营业厅0050102", "营业厅0050103", "营业厅0050104", "营业厅0050105", "营业厅0050106", "营业厅0050107", "营业厅0050108", "营业厅0050109",];
    cityList['支行00502'] = ["请选择营业厅","营业厅0050201", "营业厅0050202", "营业厅0050203", "营业厅0050204", "营业厅0050205", "营业厅0050206", "营业厅0050207", "营业厅0050208", "营业厅0050209",];
    cityList['支行00503'] = ["请选择营业厅","营业厅0050301", "营业厅0050302", "营业厅0050303", "营业厅0050304", "营业厅0050305", "营业厅0050306", "营业厅0050307", "营业厅0050308", "营业厅0050309",];
    cityList['支行00504'] = ["请选择营业厅","营业厅0050401", "营业厅0050402", "营业厅0050403", "营业厅0050404", "营业厅0050405", "营业厅0050406", "营业厅0050407", "营业厅0050408", "营业厅0050409",];
    cityList['支行00505'] = ["请选择营业厅","营业厅0050501", "营业厅0050502", "营业厅0050503", "营业厅0050504", "营业厅0050505", "营业厅0050506", "营业厅0050507", "营业厅0050508", "营业厅0050509",];
    cityList['支行00506'] = ["请选择营业厅","营业厅0050601", "营业厅0050602", "营业厅0050603", "营业厅0050604", "营业厅0050605", "营业厅0050606", "营业厅0050607", "营业厅0050608", "营业厅0050609",];
    cityList['支行00507'] = ["请选择营业厅","营业厅0050701", "营业厅0050702", "营业厅0050703", "营业厅0050704", "营业厅0050705", "营业厅0050706", "营业厅0050707", "营业厅0050708", "营业厅0050709",];
    cityList['支行00508'] = ["请选择营业厅","营业厅0050801", "营业厅0050802", "营业厅0050703", "营业厅0050804", "营业厅0050805", "营业厅0050806", "营业厅0050807", "营业厅0050808", "营业厅0050809",];
    cityList['支行00509'] = ["请选择营业厅","营业厅0050901", "营业厅0050902", "营业厅0050803", "营业厅0050904", "营业厅0050905", "营业厅0050906", "营业厅0050907", "营业厅0050908", "营业厅0050909",];

    cityList['支行00601'] = ["请选择营业厅","营业厅0060101", "营业厅0060102", "营业厅0060103", "营业厅0060104", "营业厅0060105", "营业厅0060106", "营业厅0060107", "营业厅0060108", "营业厅0060109",];
    cityList['支行00602'] = ["请选择营业厅","营业厅0060201", "营业厅0060202", "营业厅0060203", "营业厅0060204", "营业厅0060205", "营业厅0060206", "营业厅0060207", "营业厅0060208", "营业厅0060209",];
    cityList['支行00603'] = ["请选择营业厅","营业厅0060301", "营业厅0060302", "营业厅0060303", "营业厅0060304", "营业厅0060305", "营业厅0060306", "营业厅0060307", "营业厅0060308", "营业厅0060309",];
    cityList['支行00604'] = ["请选择营业厅","营业厅0060401", "营业厅0060402", "营业厅0060403", "营业厅0060404", "营业厅0060405", "营业厅0060406", "营业厅0060407", "营业厅0060408", "营业厅0060409",];
    cityList['支行00605'] = ["请选择营业厅","营业厅0060501", "营业厅0060502", "营业厅0060503", "营业厅0060504", "营业厅0060505", "营业厅0060506", "营业厅0060507", "营业厅0060508", "营业厅0060509",];
    cityList['支行00606'] = ["请选择营业厅","营业厅0060601", "营业厅0060602", "营业厅0060603", "营业厅0060604", "营业厅0060605", "营业厅0060606", "营业厅0060607", "营业厅0060608", "营业厅0060609",];
    cityList['支行00607'] = ["请选择营业厅","营业厅0060701", "营业厅0060702", "营业厅0060703", "营业厅0060704", "营业厅0060705", "营业厅0060706", "营业厅0060707", "营业厅0060708", "营业厅0060709",];
    cityList['支行00608'] = ["请选择营业厅","营业厅0060801", "营业厅0060802", "营业厅0060703", "营业厅0060804", "营业厅0060805", "营业厅0060806", "营业厅0060807", "营业厅0060808", "营业厅0060809",];
    cityList['支行00609'] = ["请选择营业厅","营业厅0060901", "营业厅0060902", "营业厅0060803", "营业厅0060904", "营业厅0060905", "营业厅0060906", "营业厅0060907", "营业厅0060908", "营业厅0060909",];

    cityList['支行00701'] = ["请选择营业厅","营业厅0070101", "营业厅0070102", "营业厅0070103", "营业厅0070104", "营业厅0070105", "营业厅0070106", "营业厅0070107", "营业厅0070108", "营业厅0070109",];
    cityList['支行00702'] = ["请选择营业厅","营业厅0070201", "营业厅0070202", "营业厅0070203", "营业厅0070204", "营业厅0070205", "营业厅0070206", "营业厅0070207", "营业厅0070208", "营业厅0070209",];
    cityList['支行00703'] = ["请选择营业厅","营业厅0070301", "营业厅0070302", "营业厅0070303", "营业厅0070304", "营业厅0070305", "营业厅0070306", "营业厅0070307", "营业厅0070308", "营业厅0070309",];
    cityList['支行00704'] = ["请选择营业厅","营业厅0070401", "营业厅0070402", "营业厅0070403", "营业厅0070404", "营业厅0070405", "营业厅0070406", "营业厅0070407", "营业厅0070408", "营业厅0070409",];
    cityList['支行00705'] = ["请选择营业厅","营业厅0070501", "营业厅0070502", "营业厅0070503", "营业厅0070504", "营业厅0070505", "营业厅0070506", "营业厅0070507", "营业厅0070508", "营业厅0070509",];
    cityList['支行00706'] = ["请选择营业厅","营业厅0070601", "营业厅0070602", "营业厅0070603", "营业厅0070604", "营业厅0070605", "营业厅0070606", "营业厅0070607", "营业厅0070608", "营业厅0070609",];
    cityList['支行00707'] = ["请选择营业厅","营业厅0070701", "营业厅0070702", "营业厅0070703", "营业厅0070704", "营业厅0070705", "营业厅0070706", "营业厅0070707", "营业厅0070708", "营业厅0070709",];
    cityList['支行00708'] = ["请选择营业厅","营业厅0070801", "营业厅0070802", "营业厅0070703", "营业厅0070804", "营业厅0070805", "营业厅0070806", "营业厅0070807", "营业厅0070808", "营业厅0070809",];
    cityList['支行00709'] = ["请选择营业厅","营业厅0070901", "营业厅0070902", "营业厅0070803", "营业厅0070904", "营业厅0070905", "营业厅0070906", "营业厅0070907", "营业厅0070908", "营业厅0070909",];

    cityList['支行00801'] = ["请选择营业厅","营业厅0080101", "营业厅0080102", "营业厅0080103", "营业厅0080104", "营业厅0080105", "营业厅0080106", "营业厅0080107", "营业厅0080108", "营业厅0080109",];
    cityList['支行00802'] = ["请选择营业厅","营业厅0080201", "营业厅0080202", "营业厅0080203", "营业厅0080204", "营业厅0080205", "营业厅0080206", "营业厅0080207", "营业厅0080208", "营业厅0080209",];
    cityList['支行00803'] = ["请选择营业厅","营业厅0080301", "营业厅0080302", "营业厅0080303", "营业厅0080304", "营业厅0080305", "营业厅0080306", "营业厅0080307", "营业厅0080308", "营业厅0080309",];
    cityList['支行00804'] = ["请选择营业厅","营业厅0080401", "营业厅0080402", "营业厅0080403", "营业厅0080404", "营业厅0080405", "营业厅0080406", "营业厅0080407", "营业厅0080408", "营业厅0080409",];
    cityList['支行00805'] = ["请选择营业厅","营业厅0080501", "营业厅0080502", "营业厅0080503", "营业厅0080504", "营业厅0080505", "营业厅0080506", "营业厅0080507", "营业厅0080508", "营业厅0080509",];
    cityList['支行00806'] = ["请选择营业厅","营业厅0080601", "营业厅0080602", "营业厅0080603", "营业厅0080604", "营业厅0080605", "营业厅0080606", "营业厅0080607", "营业厅0080608", "营业厅0080609",];
    cityList['支行00807'] = ["请选择营业厅","营业厅0080701", "营业厅0080702", "营业厅0080703", "营业厅0080704", "营业厅0080705", "营业厅0080706", "营业厅0080707", "营业厅0080708", "营业厅0080709",];
    cityList['支行00808'] = ["请选择营业厅","营业厅0080801", "营业厅0080802", "营业厅0080703", "营业厅0080804", "营业厅0080805", "营业厅0080806", "营业厅0080807", "营业厅0080808", "营业厅0080809",];
    cityList['支行00809'] = ["请选择营业厅","营业厅0080901", "营业厅0080902", "营业厅0080803", "营业厅0080904", "营业厅0080905", "营业厅0080906", "营业厅0080907", "营业厅0080908", "营业厅0080909",];

    cityList['支行00901'] = ["请选择营业厅","营业厅0090101", "营业厅0090102", "营业厅0090103", "营业厅0090104", "营业厅0090105", "营业厅0090106", "营业厅0090107", "营业厅0090108", "营业厅0090109",];
    cityList['支行09102'] = ["请选择营业厅","营业厅0090201", "营业厅0090202", "营业厅0090203", "营业厅0090204", "营业厅0090205", "营业厅0090206", "营业厅0090207", "营业厅0090208", "营业厅0090209",];
    cityList['支行09103'] = ["请选择营业厅","营业厅0090301", "营业厅0090302", "营业厅0090303", "营业厅0090304", "营业厅0090305", "营业厅0090306", "营业厅0090307", "营业厅0090308", "营业厅0090309",];
    cityList['支行00904'] = ["请选择营业厅","营业厅0090401", "营业厅0090402", "营业厅0090403", "营业厅0090404", "营业厅0090405", "营业厅0090406", "营业厅0090407", "营业厅0090408", "营业厅0090409",];
    cityList['支行00905'] = ["请选择营业厅","营业厅0090501", "营业厅0090502", "营业厅0090503", "营业厅0090504", "营业厅0090505", "营业厅0090506", "营业厅0090507", "营业厅0090508", "营业厅0090509",];
    cityList['支行00906'] = ["请选择营业厅","营业厅0090601", "营业厅0090602", "营业厅0090603", "营业厅0090604", "营业厅0090605", "营业厅0090606", "营业厅0090607", "营业厅0090608", "营业厅0090609",];
    cityList['支行00907'] = ["请选择营业厅","营业厅0090701", "营业厅0090702", "营业厅0090703", "营业厅0090704", "营业厅0090705", "营业厅0090706", "营业厅0090707", "营业厅0090708", "营业厅0090709",];
    cityList['支行00908'] = ["请选择营业厅","营业厅0090801", "营业厅0090802", "营业厅0090703", "营业厅0090804", "营业厅0090805", "营业厅0090806", "营业厅0090807", "营业厅0090808", "营业厅0090809",];
    cityList['支行00909'] = ["请选择营业厅","营业厅0090901", "营业厅0090902", "营业厅0090803", "营业厅0090904", "营业厅0090905", "营业厅0090906", "营业厅0090907", "营业厅0090908", "营业厅0090909",];

    var hall = document.forms[0].hall;//文档中的第一个市区；
    hall.options.length = 0;//把city下拉列表的选项清0
    var index = document.forms[0].branch.value;
    hall.options.length = 0;
    for (var j in cityList[index]) {
        newOption = new Option(cityList[index][j], cityList[index][j]);
        hall.options.add(newOption);
    }
}