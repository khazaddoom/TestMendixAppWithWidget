
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { Component, createElement } from 'react';

function hot(widget) {
  return widget;
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */
	(function () {

	  var hasOwn = {}.hasOwnProperty;

	  function classNames() {
	    var classes = [];

	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;

	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString === Object.prototype.toString) {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        } else {
	          classes.push(arg.toString());
	        }
	      }
	    }

	    return classes.join(' ');
	  }

	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
} (classnames));

var classNames = classnames.exports;

class TextInput extends Component {
    constructor() {
        super(...arguments);
        this.handleChange = this.onChange.bind(this);
    }
    render() {
        const className = classNames("form-control", this.props.className);
        return createElement("input", { type: "text", className: className, style: this.props.style, value: this.props.value, tabIndex: this.props.tabIndex, onChange: this.handleChange });
    }
    onChange(event) {
        if (this.props.onUpdate) {
            this.props.onUpdate(event.target.value);
        }
    }
}

class TextBox extends Component {
    constructor() {
        super(...arguments);
        this.onUpdateHandle = this.onUpdate.bind(this);
    }
    onUpdate(value) {
        this.props.textAttribute.setValue(value);
    }
    render() {
        const value = this.props.textAttribute.value || "";
        return (createElement(TextInput, { value: value, tabIndex: this.props.tabIndex, onUpdate: this.onUpdateHandle }));
    }
}
var GTextBox = hot(TextBox);

export { GTextBox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1RleHRCb3gubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1lbmRpeC9wbHVnZ2FibGUtd2lkZ2V0cy10b29scy9jb25maWdzL2hvdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGV4dElucHV0LnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9HVGV4dEJveC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhvdCh3aWRnZXQpIHtcbiAgICByZXR1cm4gd2lkZ2V0O1xufVxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCwgQ1NTUHJvcGVydGllcywgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcbiAgICB0YWJJbmRleD86IG51bWJlcjtcclxuICAgIG9uVXBkYXRlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcz4ge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXCJmb3JtLWNvbnRyb2xcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DaGFuZ2UoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXIvcm9vdFwiO1xuXG5pbXBvcnQgeyBHVGV4dEJveENvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL3R5cGluZ3MvR1RleHRCb3hQcm9wc1wiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9UZXh0SW5wdXRcIjtcblxuaW1wb3J0IFwiLi91aS9HVGV4dEJveC5jc3NcIjtcblxuY2xhc3MgVGV4dEJveCBleHRlbmRzIENvbXBvbmVudDxHVGV4dEJveENvbnRhaW5lclByb3BzPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvblVwZGF0ZUhhbmRsZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKTtcbiAgICBwcml2YXRlIG9uVXBkYXRlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9wcy50ZXh0QXR0cmlidXRlLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy50ZXh0QXR0cmlidXRlLnZhbHVlIHx8IFwiXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLm9uVXBkYXRlSGFuZGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChUZXh0Qm94KTtcbiJdLCJuYW1lcyI6WyJob3QiLCJ3aWRnZXQiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZyIsImFyZ1R5cGUiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5uZXIiLCJhcHBseSIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwia2V5IiwiY2FsbCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLEdBQVQsQ0FBYUMsTUFBYixFQUFxQjtBQUN4QixFQUFBLE9BQU9BLE1BQVAsQ0FBQTtBQUNIOzs7Ozs7Ozs7OztBQ0dEO0FBRUMsQ0FBQSxDQUFZLFlBQUE7O0dBR1osSUFBSUMsTUFBTSxHQUFHLEVBQUEsQ0FBR0MsY0FBaEIsQ0FBQTs7R0FFQSxTQUFTQyxVQUFULEdBQXNCO0tBQ3JCLElBQUlDLE9BQU8sR0FBRyxFQUFkLENBQUE7O0FBRUEsS0FBQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0NGLENBQUMsRUFBdkMsRUFBMkM7QUFDMUMsT0FBQSxJQUFJRyxHQUFHLEdBQUdGLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFuQixDQUFBO09BQ0EsSUFBSSxDQUFDRyxHQUFMLEVBQVUsU0FBQTtPQUVWLElBQUlDLE9BQU8sR0FBRyxPQUFPRCxHQUFyQixDQUFBOztPQUVBLElBQUlDLE9BQU8sS0FBSyxRQUFaLElBQXdCQSxPQUFPLEtBQUssUUFBeEMsRUFBa0Q7U0FD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
