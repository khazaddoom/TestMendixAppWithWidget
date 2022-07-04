
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
define(['react'], (function (react) { 'use strict';

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

    class TextInput extends react.Component {
        constructor() {
            super(...arguments);
            this.handleChange = this.onChange.bind(this);
        }
        render() {
            const className = classNames("form-control", this.props.className);
            return react.createElement("input", { type: "text", className: className, style: this.props.style, value: this.props.value, tabIndex: this.props.tabIndex, onChange: this.handleChange });
        }
        onChange(event) {
            if (this.props.onUpdate) {
                this.props.onUpdate(event.target.value);
            }
        }
    }

    class TextBox extends react.Component {
        constructor() {
            super(...arguments);
            this.onUpdateHandle = this.onUpdate.bind(this);
        }
        onUpdate(value) {
            this.props.textAttribute.setValue(value);
        }
        render() {
            const value = this.props.textAttribute.value || "";
            return (react.createElement(TextInput, { value: value, tabIndex: this.props.tabIndex, onUpdate: this.onUpdateHandle }));
        }
    }
    var GTextBox = hot(TextBox);

    return GTextBox;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1RleHRCb3guanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWVuZGl4L3BsdWdnYWJsZS13aWRnZXRzLXRvb2xzL2NvbmZpZ3MvaG90LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQudHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL0dUZXh0Qm94LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaG90KHdpZGdldCkge1xuICAgIHJldHVybiB3aWRnZXQ7XG59XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50LCBDU1NQcm9wZXJ0aWVzLCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICAgIHRhYkluZGV4PzogbnVtYmVyO1xyXG4gICAgb25VcGRhdGU/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJbnB1dFByb3BzPiB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcImZvcm0tY29udHJvbFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZShldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBob3QgfSBmcm9tIFwicmVhY3QtaG90LWxvYWRlci9yb290XCI7XG5cbmltcG9ydCB7IEdUZXh0Qm94Q29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi4vdHlwaW5ncy9HVGV4dEJveFByb3BzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL1RleHRJbnB1dFwiO1xuXG5pbXBvcnQgXCIuL3VpL0dUZXh0Qm94LmNzc1wiO1xuXG5jbGFzcyBUZXh0Qm94IGV4dGVuZHMgQ29tcG9uZW50PEdUZXh0Qm94Q29udGFpbmVyUHJvcHM+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9uVXBkYXRlSGFuZGxlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHByaXZhdGUgb25VcGRhdGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb3BzLnRleHRBdHRyaWJ1dGUuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnRleHRBdHRyaWJ1dGUudmFsdWUgfHwgXCJcIjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e3RoaXMub25VcGRhdGVIYW5kbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KFRleHRCb3gpO1xuIl0sIm5hbWVzIjpbImhvdCIsIndpZGdldCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJrZXkiLCJjYWxsIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Iiwid2luZG93IiwiQ29tcG9uZW50IiwiY3JlYXRlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7OztJQUFPLFNBQVNBLEdBQVQsQ0FBYUMsTUFBYixFQUFxQjtJQUN4QixFQUFBLE9BQU9BLE1BQVAsQ0FBQTtJQUNIOzs7Ozs7Ozs7OztJQ0dEO0lBRUMsQ0FBQSxDQUFZLFlBQUE7O09BR1osSUFBSUMsTUFBTSxHQUFHLEVBQUEsQ0FBR0MsY0FBaEIsQ0FBQTs7T0FFQSxTQUFTQyxVQUFULEdBQXNCO1NBQ3JCLElBQUlDLE9BQU8sR0FBRyxFQUFkLENBQUE7O0lBRUEsS0FBQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0NGLENBQUMsRUFBdkMsRUFBMkM7SUFDMUMsT0FBQSxJQUFJRyxHQUFHLEdBQUdGLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFuQixDQUFBO1dBQ0EsSUFBSSxDQUFDRyxHQUFMLEVBQVUsU0FBQTtXQUVWLElBQUlDLE9BQU8sR0FBRyxPQUFPRCxHQUFyQixDQUFBOztXQUVBLElBQUlDLE9BQU8sS0FBSyxRQUFaLElBQXdC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
