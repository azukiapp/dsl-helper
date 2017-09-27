import h from './spec-helper';
import { DSLHelper } from '../src';
import * as path from 'path';
import { readFileSync } from 'fs';

describe('DSLHelper', function() {
  var dsl = new DSLHelper({
    foo(value) {
      this.target_prop = value;
    },
  });

  var read = (fixture) => {
    var file = path.join(__dirname, '..', 'examples', 'fixtures', fixture);
    var content = readFileSync(file).toString();
    h.expect(content).not.null;
    return [content, file];
  };

  it('should create a dsl-helper instance', function() {
    h.expect(dsl).to.instanceOf(DSLHelper);
  });

  it('should execute code in dsl context', function() {
    var target = dsl.execute({ x: 'y' }, ...read('simple.js'));
    h.expect(target).to.have.property('x', 'y');
    h.expect(target).to.have.property('target_prop', 'bar');
  });

  it('should raise an exception for syntax', function() {
    var code, file;
    var fun = () => {
      [code, file] = read('syntax_error.js');
      dsl.execute({}, code, file);
    };

    h.expect(fun).to.throw(SyntaxError, /missing \) after argument list/)
      .and.have.property('stack')
      .and.match(new RegExp(h.escapeRegExp(file), 'm'));
  });

  it('should rewrite stack tracer', function() {
    var fun = () => {
      dsl.execute({}, ...read('logic_error.js'));
    };
    h.expect(fun).to.throw(/bar is not defined/);
  });
});
