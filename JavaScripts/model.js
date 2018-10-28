function lazy_convert(stream) {

    var x = 0;
    var Input_string = stream.Input_string.value;
    stream.output_string.value = "";
    for (x = 0; x <= (Input_string.length - 1); x++) {
        var hex1 = Input_string.substring(x, x + 1);
        var hex2 = Input_string.substring(x + 1, x + 2);
        if ((hex1 >= 'a') && (hex1 <= 'f')) {
            hex1 = hex1.toUpperCase();

        }

        if ((hex2 >= 'a') && (hex2 <= 'f')) {
            hex2 = hex2.toUpperCase();

        }
        if (((hex1 >= 'A' && hex1 <= 'F') || (hex1 >= '0' && hex1 <= '9')) &&
            ((hex2 >= 'A' && hex2 <= 'F') || (hex2 >= '0' && hex2 <= '9'))) {
            var hexbyte = hex1 + hex2;
            ebcdic = '.';
            switch (hexbyte) {
                case '00':
                    ebcdic = '<NUL>';
                    break;
                case '01':
                    ebcdic = '<SOH>';
                    break;
                case '02':
                    ebcdic = '<STX>';
                    break;
                case '03':
                    ebcdic = '<ETX>';
                    break;
                case '04':
                    ebcdic = '<SEL>';
                    break;
                case '05':
                    ebcdic = '<HT>';
                    break;
                case '06':
                    ebcdic = '<RNL>';
                    break;
                case '07':
                    ebcdic = '<DEL>';
                    break;
                case '08':
                    ebcdic = '<GE>';
                    break;
                case '09':
                    ebcdic = '<SPS>';
                    break;
                case '0A':
                    ebcdic = '<RPT>';
                    break;
                case '0B':
                    ebcdic = '<VT>';
                    break;
                case '0C':
                    ebcdic = '<FF>';
                    break;
                case '0D':
                    ebcdic = chr(13);
                    break;
                case '0E':
                    ebcdic = '<SO>';
                    break;
                case '0F':
                    ebcdic = '<SI>';
                    break;
                case '10':
                    ebcdic = '<DLE>';
                    break;
                case '11':
                    ebcdic = '<DC1>';
                    break;
                case '12':
                    ebcdic = '<DC2>';
                    break;
                case '13':
                    ebcdic = '<DC3>';
                    break;
                case '14':
                    ebcdic = '<RES/ENP>';
                    break;
                case '15':
                    ebcdic = '<NL>';
                    break;
                case '16':
                    ebcdic = '<BS>';
                    break;
                case '17':
                    ebcdic = '<POC>';
                    break;
                case '18':
                    ebcdic = '<CAN>';
                    break;
                case '19':
                    ebcdic = '<EM>';
                    break;
                case '1A':
                    ebcdic = '<UBS>';
                    break;
                case '1B':
                    ebcdic = '<CU1>';
                    break;
                case '1C':
                    ebcdic = '<IFS>';
                    break;
                case '1D':
                    ebcdic = '<IGS>';
                    break;
                case '1E':
                    ebcdic = '<IRS>';
                    break;
                case '1F':
                    ebcdic = '<ITB/IUS>';
                    break;
                case '20':
                    ebcdic = '<DS>';
                    break;
                case '21':
                    ebcdic = '<SOS>';
                    break;
                case '22':
                    ebcdic = '<FS>';
                    break;
                case '23':
                    ebcdic = '<WUS>';
                    break;
                case '24':
                    ebcdic = '<BYP/INP>';
                    break;
                case '25':
                    ebcdic = '<LF>';
                    break;
                case '26':
                    ebcdic = '<ETB>';
                    break;
                case '27':
                    ebcdic = '<ESC>';
                    break;
                case '28':
                    ebcdic = '<SA>';
                    break;
                case '29':
                    ebcdic = '<SFE>';
                    break;
                case '2A':
                    ebcdic = '<SM/SW>';
                    break;
                case '2B':
                    ebcdic = '<CSP>';
                    break;
                case '2C':
                    ebcdic = '<MFA>';
                    break;
                case '2D':
                    ebcdic = '<ENQ>';
                    break;
                case '2E':
                    ebcdic = '<ACK>';
                    break;
                case '2F':
                    ebcdic = '<BEL>';
                    break;
                case '30':
                    break;
                case '31':
                    break;
                case '32':
                    ebcdic = '<SYN>';
                    break;
                case '33':
                    ebcdic = '<IR>';
                    break;
                case '34':
                    ebcdic = '<PP>';
                    break;
                case '35':
                    ebcdic = '<TRN>';
                    break;
                case '36':
                    ebcdic = '<NBS>';
                    break;
                case '37':
                    ebcdic = '<EOT>';
                    break;
                case '38':
                    ebcdic = '<SBS>';
                    break;
                case '39':
                    ebcdic = '<IT>';
                    break;
                case '3A':
                    ebcdic = '<RFF>';
                    break;
                case '3B':
                    ebcdic = '<CU3>';
                    break;
                case '3C':
                    ebcdic = '<DC4>';
                    break;
                case '3D':
                    ebcdic = '<NAK>';
                    break;
                case '3E':
                    break;
                case '3F':
                    ebcdic = '<SUB>';
                    break;
                case '40':
                    ebcdic = ' ';
                    break;
                case '41':
                    ebcdic = '<RSP>';
                    break;
                case '42':
                    break;
                case '43':
                    break;
                case '44':
                    break;
                case '45':
                    break;
                case '46':
                    break;
                case '47':
                    break;
                case '48':
                    break;
                case '49':
                    break;
                case '4A':
                    ebcdic = '[';
                    break;
                case '4B':
                    ebcdic = '.';
                    break;
                case '4C':
                    ebcdic = '<';
                    break;
                case '4D':
                    ebcdic = '(';
                    break;
                case '4E':
                    ebcdic = '+';
                    break;
                case '4F':
                    ebcdic = '!';
                    break;
                case '50':
                    ebcdic = '&';
                    break;
                case '51':
                    break;
                case '52':
                    break;
                case '53':
                    break;
                case '54':
                    break;
                case '55':
                    break;
                case '56':
                    break;
                case '57':
                    break;
                case '58':
                    break;
                case '59':
                    break;
                case '5A':
                    ebcdic = ']';
                    break;
                case '5B':
                    ebcdic = '$';
                    break;
                case '5C':
                    ebcdic = '*';
                    break;
                case '5D':
                    ebcdic = ')';
                    break;
                case '5E':
                    ebcdic = ';';
                    break;
                case '5F':
                    ebcdic = '^';
                    break;
                case '60':
                    ebcdic = '_';
                    break;
                case '61':
                    ebcdic = '/';
                    break;
                case '62':
                    break;
                case '63':
                    break;
                case '64':
                    break;
                case '65':
                    break;
                case '66':
                    break;
                case '67':
                    break;
                case '68':
                    break;
                case '69':
                    break;
                case '6A':
                    ebcdic = '|';
                    break;
                case '6B':
                    ebcdic = ',';
                    break;
                case '6C':
                    ebcdic = '%';
                    break;
                case '6D':
                    ebcdic = '_';
                    break;
                case '6E':
                    ebcdic = '>';
                    break;
                case '6F':
                    ebcdic = '?';
                    break;
                case '70':
                    break;
                case '71':
                    break;
                case '72':
                    break;
                case '73':
                    break;
                case '74':
                    break;
                case '75':
                    break;
                case '76':
                    break;
                case '77':
                    break;
                case '78':
                    break;
                case '79':
                    ebcdic = '`';
                    break;
                case '7A':
                    ebcdic = ':';
                    break;
                case '7B':
                    ebcdic = '#';
                    break;
                case '7C':
                    ebcdic = '@';
                    break;
                case '7D':
                    ebcdic = "'";
                    break;
                case '7E':
                    ebcdic = '=';
                    break;
                case '7F':
                    ebcdic = '"';
                    break;
                case '80':
                    break;
                case '81':
                    ebcdic = 'a';
                    break;
                case '82':
                    ebcdic = 'b';
                    break;
                case '83':
                    ebcdic = 'c';
                    break;
                case '84':
                    ebcdic = 'd';
                    break;
                case '85':
                    ebcdic = 'e';
                    break;
                case '86':
                    ebcdic = 'f';
                    break;
                case '87':
                    ebcdic = 'g';
                    break;
                case '88':
                    ebcdic = 'h';
                    break;
                case '89':
                    ebcdic = 'i';
                    break;
                case '8A':
                    break;
                case '8B':
                    ebcdic = '{';
                    break;
                case '8C':
                    break;
                case '8D':
                    break;
                case '8E':
                    break;
                case '8F':
                    ebcdic = '+';
                    break;
                case '90':
                    break;
                case '91':
                    ebcdic = 'j';
                    break;
                case '92':
                    ebcdic = 'k';
                    break;
                case '93':
                    ebcdic = 'l';
                    break;
                case '94':
                    ebcdic = 'm';
                    break;
                case '95':
                    ebcdic = 'n';
                    break;
                case '96':
                    ebcdic = 'o';
                    break;
                case '97':
                    ebcdic = 'p';
                    break;
                case '98':
                    ebcdic = 'q';
                    break;
                case '99':
                    ebcdic = 'r';
                    break;
                case '9A':
                    break;
                case '9B':
                    ebcdic = '}';
                    break;
                case '9C':
                    break;
                case '9D':
                    break;
                case '9E':
                    break;
                case '9F':
                    break;
                case 'A0':
                    break;
                case 'A1':
                    ebcdic = '~';
                    break;
                case 'A2':
                    ebcdic = 's';
                    break;
                case 'A3':
                    ebcdic = 't';
                    break;
                case 'A4':
                    ebcdic = 'u';
                    break;
                case 'A5':
                    ebcdic = 'v';
                    break;
                case 'A6':
                    ebcdic = 'w';
                    break;
                case 'A7':
                    ebcdic = 'x';
                    break;
                case 'A8':
                    ebcdic = 'y';
                    break;
                case 'A9':
                    ebcdic = 'z';
                    break;
                case 'AA':
                    break;
                case 'AB':
                    break;
                case 'AC':
                    break;
                case 'AD':
                    ebcdic = '[';
                    break;
                case 'AE':
                    break;
                case 'AF':
                    break;
                case 'B0':
                    break;
                case 'B1':
                    break;
                case 'B2':
                    break;
                case 'B3':
                    break;
                case 'B4':
                    break;
                case 'B5':
                    break;
                case 'B6':
                    break;
                case 'B7':
                    break;
                case 'B8':
                    break;
                case 'B9':
                    break;
                case 'BA':
                    break;
                case 'BB':
                    break;
                case 'BC':
                    break;
                case 'BD':
                    break;
                case 'BE':
                    break;
                case 'BF':
                    break;
                case 'C0':
                    ebcdic = '{';
                    break;
                case 'C1':
                    ebcdic = 'A';
                    break;
                case 'C2':
                    ebcdic = 'B';
                    break;
                case 'C3':
                    ebcdic = 'C';
                    break;
                case 'C4':
                    ebcdic = 'D';
                    break;
                case 'C5':
                    ebcdic = 'E';
                    break;
                case 'C6':
                    ebcdic = 'F';
                    break;
                case 'C7':
                    ebcdic = 'G';
                    break;
                case 'C8':
                    ebcdic = 'H';
                    break;
                case 'C9':
                    ebcdic = 'I';
                    break;
                case 'CA':
                    break;
                case 'CB':
                    break;
                case 'CC':
                    break;
                case 'CD':
                    break;
                case 'CE':
                    break;
                case 'CF':
                    break;
                case 'D0':
                    ebcdic = '}';
                    break;
                case 'D1':
                    ebcdic = 'J';
                    break;
                case 'D2':
                    ebcdic = 'K';
                    break;
                case 'D3':
                    ebcdic = 'L';
                    break;
                case 'D4':
                    ebcdic = 'M';
                    break;
                case 'D5':
                    ebcdic = 'N';
                    break;
                case 'D6':
                    ebcdic = 'O';
                    break;
                case 'D7':
                    ebcdic = 'P';
                    break;
                case 'D8':
                    ebcdic = 'Q';
                    break;
                case 'D9':
                    ebcdic = 'R';
                    break;
                case 'DA':
                    break;
                case 'DB':
                    break;
                case 'DC':
                    break;
                case 'DD':
                    break;
                case 'DE':
                    break;
                case 'DF':
                    break;
                case 'E0':
                    ebcdic = '\\';
                    break;
                case 'E1':
                    break;
                case 'E2':
                    ebcdic = 'S';
                    break;
                case 'E3':
                    ebcdic = 'T';
                    break;
                case 'E4':
                    ebcdic = 'U';
                    break;
                case 'E5':
                    ebcdic = 'V';
                    break;
                case 'E6':
                    ebcdic = 'W';
                    break;
                case 'E7':
                    ebcdic = 'X';
                    break;
                case 'E8':
                    ebcdic = 'Y';
                    break;
                case 'E9':
                    ebcdic = 'Z';
                    break;
                case 'EA':
                    break;
                case 'EB':
                    break;
                case 'EC':
                    break;
                case 'ED':
                    break;
                case 'EE':
                    break;
                case 'EF':
                    break;
                case 'F0':
                    ebcdic = '0';
                    break;
                case 'F1':
                    ebcdic = '1';
                    break;
                case 'F2':
                    ebcdic = '2';
                    break;
                case 'F3':
                    ebcdic = '3';
                    break;
                case 'F4':
                    ebcdic = '4';
                    break;
                case 'F5':
                    ebcdic = '5';
                    break;
                case 'F6':
                    ebcdic = '6';
                    break;
                case 'F7':
                    ebcdic = '7';
                    break;
                case 'F8':
                    ebcdic = '8';
                    break;
                case 'F9':
                    ebcdic = '9';
                    break;
                case 'FA':
                    break;
                case 'FB':
                    break;
                case 'FC':
                    break;
                case 'FD':
                    break;
                case 'FE':
                    break;
                case 'FF':
                    break;
                default:
                    ebcdic = '<<UNHANDLED CODE>>';
                    break;
            }
            x = x + 1;
            stream.output_string.value = stream.output_string.value + ebcdic;
        } else if (hex1 != ' ') { stream.output_string.value = stream.output_string.value + ''; }
    }

}

/****************************************************************************************************/

function lazy_convert_hex(stream) {
    var x = 0;
    var Input_string = stream.Input_string.value;
    stream.output_string.value = "";
    for (x = 0; x <= (Input_string.length - 1); x++) {
        var hex1 = Input_string.substring(x, x + 1);
        var hex2 = Input_string.substring(x + 1, x + 2);
        if ((hex1 >= 'a') && (hex1 <= 'f')) { hex1 = hex1.toUpperCase(); }
        if ((hex2 >= 'a') && (hex2 <= 'f')) { hex2 = hex2.toUpperCase(); }
        if (((hex1 >= 'A' && hex1 <= 'F') || (hex1 >= '0' && hex1 <= '9')) &&
            ((hex2 >= 'A' && hex2 <= 'F') || (hex2 >= '0' && hex2 <= '9'))) {
            var hexbyte = hex1 + hex2;
            ascii = '.'; // Quite the brute force method here
            switch (hexbyte) {
                case '00':
                    ascii = '<NUL>';
                    break;
                case '01':
                    ascii = '<SOH>';
                    break;
                case '02':
                    ascii = '<STX>';
                    break;
                case '03':
                    ascii = '<ETX>';
                    break;
                case '04':
                    ascii = '<EOT>';
                    break;
                case '05':
                    ascii = '<ENQ>';
                    break;
                case '06':
                    ascii = '<ACK>';
                    break;
                case '07':
                    ascii = '<BEL>';
                    break;
                case '08':
                    ascii = '<BS>';
                    break;
                case '09':
                    ascii = '<HT>';
                    break;
                case '0A':
                    ascii = '<LF>';
                    break;
                case '0B':
                    ascii = '<VT>';
                    break;
                case '0C':
                    ascii = '<FF>';
                    break;
                case '0D':
                    ascii = chr(13);
                    break;
                case '0E':
                    ascii = '<SO>';
                    break;
                case '0F':
                    ascii = '<SI>';
                    break;
                case '10':
                    ascii = '<DLE>';
                    break;
                case '11':
                    ascii = '<DC1>';
                    break;
                case '12':
                    ascii = '<DC2>';
                    break;
                case '13':
                    ascii = '<DC3>';
                    break;
                case '14':
                    ascii = '<DC4>';
                    break;
                case '15':
                    ascii = '<NAK>';
                    break;
                case '16':
                    ascii = '<SYN>';
                    break;
                case '17':
                    ascii = '<ETB>';
                    break;
                case '18':
                    ascii = '<CAN>';
                    break;
                case '19':
                    ascii = '<EM>';
                    break;
                case '1A':
                    ascii = '<SUB>';
                    break;
                case '1B':
                    ascii = '<ESC>';
                    break;
                case '1C':
                    ascii = '<FS>';
                    break;
                case '1D':
                    ascii = '<GS>';
                    break;
                case '1E':
                    ascii = '<RS>';
                    break;
                case '1F':
                    ascii = '<US>';
                    break;
                case '20':
                    ascii = ' ';
                    break;
                case '21':
                    ascii = '!';
                    break;
                case '22':
                    ascii = '"';
                    break;
                case '23':
                    ascii = '#';
                    break;
                case '24':
                    ascii = '$';
                    break;
                case '25':
                    ascii = '%';
                    break;
                case '26':
                    ascii = '&';
                    break;
                case '27':
                    ascii = "'";
                    break;
                case '28':
                    ascii = '(';
                    break;
                case '29':
                    ascii = ')';
                    break;
                case '2A':
                    ascii = '*';
                    break;
                case '2B':
                    ascii = '+';
                    break;
                case '2C':
                    ascii = ',';
                    break;
                case '2D':
                    ascii = '-';
                    break;
                case '2E':
                    ascii = '.';
                    break;
                case '2F':
                    ascii = '/';
                    break;
                case '30':
                    ascii = '0';
                    break;
                case '31':
                    ascii = '1';
                    break;
                case '32':
                    ascii = '2';
                    break;
                case '33':
                    ascii = '3';
                    break;
                case '34':
                    ascii = '4';
                    break;
                case '35':
                    ascii = '5';
                    break;
                case '36':
                    ascii = '6';
                    break;
                case '37':
                    ascii = '7';
                    break;
                case '38':
                    ascii = '8';
                    break;
                case '39':
                    ascii = '9';
                    break;
                case '3A':
                    ascii = ':';
                    break;
                case '3B':
                    ascii = ';';
                    break;
                case '3C':
                    ascii = '<';
                    break;
                case '3D':
                    ascii = '=';
                    break;
                case '3E':
                    ascii = '>';
                    break;
                case '3F':
                    ascii = '?';
                    break;
                case '40':
                    ascii = '@';
                    break;
                case '41':
                    ascii = 'A';
                    break;
                case '42':
                    ascii = 'B';
                    break;
                case '43':
                    ascii = 'C';
                    break;
                case '44':
                    ascii = 'D';
                    break;
                case '45':
                    ascii = 'E';
                    break;
                case '46':
                    ascii = 'F';
                    break;
                case '47':
                    ascii = 'G';
                    break;
                case '48':
                    ascii = 'H';
                    break;
                case '49':
                    ascii = 'I';
                    break;
                case '4A':
                    ascii = 'J';
                    break;
                case '4B':
                    ascii = 'K';
                    break;
                case '4C':
                    ascii = 'L';
                    break;
                case '4D':
                    ascii = 'M';
                    break;
                case '4E':
                    ascii = 'N';
                    break;
                case '4F':
                    ascii = 'O';
                    break;
                case '50':
                    ascii = 'P';
                    break;
                case '51':
                    ascii = 'Q';
                    break;
                case '52':
                    ascii = 'R';
                    break;
                case '53':
                    ascii = 'S';
                    break;
                case '54':
                    ascii = 'T';
                    break;
                case '55':
                    ascii = 'U';
                    break;
                case '56':
                    ascii = 'V';
                    break;
                case '57':
                    ascii = 'W';
                    break;
                case '58':
                    ascii = 'X';
                    break;
                case '59':
                    ascii = 'Y';
                    break;
                case '5A':
                    ascii = 'Z';
                    break;
                case '5B':
                    ascii = '[';
                    break;
                case '5C':
                    ascii = '\\';
                    break;
                case '5D':
                    ascii = ']';
                    break;
                case '5E':
                    ascii = '^';
                    break;
                case '5F':
                    ascii = '_';
                    break;
                case '60':
                    ascii = '`';
                    break;
                case '61':
                    ascii = 'a';
                    break;
                case '62':
                    ascii = 'b';
                    break;
                case '63':
                    ascii = 'c';
                    break;
                case '64':
                    ascii = 'd';
                    break;
                case '65':
                    ascii = 'e';
                    break;
                case '66':
                    ascii = 'f';
                    break;
                case '67':
                    ascii = 'g';
                    break;
                case '68':
                    ascii = 'h';
                    break;
                case '69':
                    ascii = 'i';
                    break;
                case '6A':
                    ascii = 'j';
                    break;
                case '6B':
                    ascii = 'k';
                    break;
                case '6C':
                    ascii = 'l';
                    break;
                case '6D':
                    ascii = 'm';
                    break;
                case '6E':
                    ascii = 'n';
                    break;
                case '6F':
                    ascii = 'o';
                    break;
                case '70':
                    ascii = 'p';
                    break;
                case '71':
                    ascii = 'q';
                    break;
                case '72':
                    ascii = 'r';
                    break;
                case '73':
                    ascii = 's';
                    break;
                case '74':
                    ascii = 't';
                    break;
                case '75':
                    ascii = 'u';
                    break;
                case '76':
                    ascii = 'v';
                    break;
                case '77':
                    ascii = 'w';
                    break;
                case '78':
                    ascii = 'x';
                    break;
                case '79':
                    ascii = 'y';
                    break;
                case '7A':
                    ascii = 'z';
                    break;
                case '7B':
                    ascii = '{';
                    break;
                case '7C':
                    ascii = '|';
                    break;
                case '7D':
                    ascii = '}';
                    break;
                case '7E':
                    ascii = '~';
                    break;
                case '7F':
                    ascii = '<DEL>';
                    break;
                case '80':
                    break;
                case '81':
                    break;
                case '82':
                    break;
                case '83':
                    break;
                case '84':
                    break;
                case '85':
                    break;
                case '86':
                    break;
                case '87':
                    break;
                case '88':
                    break;
                case '89':
                    break;
                case '8A':
                    break;
                case '8B':
                    break;
                case '8C':
                    break;
                case '8D':
                    break;
                case '8E':
                    break;
                case '8F':
                    break;
                case '90':
                    break;
                case '91':
                    break;
                case '92':
                    break;
                case '93':
                    break;
                case '94':
                    break;
                case '95':
                    break;
                case '96':
                    break;
                case '97':
                    break;
                case '98':
                    break;
                case '99':
                    break;
                case '9A':
                    break;
                case '9B':
                    break;
                case '9C':
                    break;
                case '9D':
                    break;
                case '9E':
                    break;
                case '9F':
                    break;
                case 'A0':
                    break;
                case 'A1':
                    break;
                case 'A2':
                    break;
                case 'A3':
                    break;
                case 'A4':
                    break;
                case 'A5':
                    break;
                case 'A6':
                    break;
                case 'A7':
                    break;
                case 'A8':
                    break;
                case 'A9':
                    break;
                case 'AA':
                    break;
                case 'AB':
                    break;
                case 'AC':
                    break;
                case 'AD':
                    break;
                case 'AE':
                    break;
                case 'AF':
                    break;
                case 'B0':
                    break;
                case 'B1':
                    break;
                case 'B2':
                    break;
                case 'B3':
                    break;
                case 'B4':
                    break;
                case 'B5':
                    break;
                case 'B6':
                    break;
                case 'B7':
                    break;
                case 'B8':
                    break;
                case 'B9':
                    break;
                case 'BA':
                    break;
                case 'BB':
                    break;
                case 'BC':
                    break;
                case 'BD':
                    break;
                case 'BE':
                    break;
                case 'BF':
                    break;
                case 'C0':
                    break;
                case 'C1':
                    break;
                case 'C2':
                    break;
                case 'C3':
                    break;
                case 'C4':
                    break;
                case 'C5':
                    break;
                case 'C6':
                    break;
                case 'C7':
                    break;
                case 'C8':
                    break;
                case 'C9':
                    break;
                case 'CA':
                    break;
                case 'CB':
                    break;
                case 'CC':
                    break;
                case 'CD':
                    break;
                case 'CE':
                    break;
                case 'CF':
                    break;
                case 'D0':
                    break;
                case 'D1':
                    break;
                case 'D2':
                    break;
                case 'D3':
                    break;
                case 'D4':
                    break;
                case 'D5':
                    break;
                case 'D6':
                    break;
                case 'D7':
                    break;
                case 'D8':
                    break;
                case 'D9':
                    break;
                case 'DA':
                    break;
                case 'DB':
                    break;
                case 'DC':
                    break;
                case 'DD':
                    break;
                case 'DE':
                    break;
                case 'DF':
                    break;
                case 'E0':
                    break;
                case 'E1':
                    break;
                case 'E2':
                    break;
                case 'E3':
                    break;
                case 'E4':
                    break;
                case 'E5':
                    break;
                case 'E6':
                    break;
                case 'E7':
                    break;
                case 'E8':
                    break;
                case 'E9':
                    break;
                case 'EA':
                    break;
                case 'EB':
                    break;
                case 'EC':
                    break;
                case 'ED':
                    break;
                case 'EE':
                    break;
                case 'EF':
                    break;
                case 'F0':
                    break;
                case 'F1':
                    break;
                case 'F2':
                    break;
                case 'F3':
                    break;
                case 'F4':
                    break;
                case 'F5':
                    break;
                case 'F6':
                    break;
                case 'F7':
                    break;
                case 'F8':
                    break;
                case 'F9':
                    break;
                case 'FA':
                    break;
                case 'FB':
                    break;
                case 'FC':
                    break;
                case 'FD':
                    break;
                case 'FE':
                    break;
                case 'FF':
                    break;
                default:
                    ascii = '<<UNHANDLED CODE>>';
                    break;
            }
            x = x + 1;
            stream.output_string.value = stream.output_string.value + ascii;
        } else if (hex1 != ' ') { stream.output_string.value = stream.output_string.value + ''; }
    }
}