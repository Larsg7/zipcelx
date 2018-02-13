import generatorCellNumber from '../../commons/generatorCellNumber';
import generatorCellDate from '../../commons/generateCellDate';
import generateCellDate from '../../commons/generateCellDate';

export default (index, value, rowIndex) =>
  `<c r="${generatorCellNumber(index, rowIndex)}"><v>${generateCellDate(
    value
  )}</v></c>`;
