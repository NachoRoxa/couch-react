import { Component } from 'react';

class Validator extends Component {


  getDv = (rut) => {
    let suma = 0;
    var i, j;
    for (i = j = rut.length - 1; j >= 0; i = j += -1) {
      suma = suma + rut.charAt(i) * (2 + ((rut.length - 1 - i) % 6));
    }
    suma = 11 - (suma % 11);
    switch (suma) {
      case 10:
        return 'K';
      case 11:
        return 0;
      default:
        return suma;
    }
  };

  verifyAndFixRut = target => {
    var cdv, dv, noFormat, olen, position, rut, withFormat;

    position = target.selectionStart;
    olen = target.value.length;
    noFormat = target.value.replace(/[^0-9kK]/g, '').toUpperCase();
    dv = noFormat.charAt(noFormat.length - 1);
    rut = noFormat.substring(0, noFormat.length - 1);
    withFormat = '';
    while (rut.length > 3) {
      withFormat = '.' + rut.substr(rut.length - 3) + withFormat;
      rut = rut.substring(0, rut.length - 3);
    }
    withFormat = rut + withFormat + '-' + dv.toUpperCase();
    if (noFormat.length > 1) {
      target.value = withFormat;
    } else {
      target.value = noFormat;
    }
    position = withFormat.length - olen + position;
    target.setSelectionRange(position, position);
    cdv = this.getDv(noFormat.substring(0, noFormat.length - 1)).toString();
    if (dv.toUpperCase() === cdv.toUpperCase()) {
      this.setState({
        runClasses: 'form-control is-valid',
        [target.name]: withFormat
      });
    } else {
      this.setState({
        runClasses: 'form-control',
        [target.name]: withFormat
      });
    }
  };

  validateRut = rut => {
    var cdv, noFormat;
    noFormat = rut.replace(/[^0-9kK]/g, '').toUpperCase();
    cdv = this.getDv(noFormat.substring(0, noFormat.length - 1)).toString();
    return (
      noFormat.charAt(noFormat.length - 1).toUpperCase() === cdv.toUpperCase()
    );
  };

}

export default Validator;
