/**
 * @author Ketan Mistry
 * @class Drag n Drop service of object
 */
class DragDrop {
  effect = "copyMove"; // drag drop icon effect
  format = "Text"; // text type to travel while dropping item

  dragItemBgColor = "transparent"; // '#f4f4f4';          // drag item bg color and drop container border

  dropElement: any = undefined; // drop element
  dropContainerBorderStyle = "0px solid #ccc"; // droppable container style when drag over
  dropContainerOpacity = 0.4; // droppable container opacity when drag over

  dropPos = { X: undefined, Y: undefined }; // hold position of drop client X and drop Y
  dragEndCBFn: any = undefined; // drag end callback func
  dragItem = undefined; // hold dragable item
  isDragEnter = false; // flag for drag enter once call when drag start

  // drag start event of draggable element
  dragStart(event: any, args: any) {
    // set drag item
    // effect allowed - copyMove/move
    this.dragItem = args;
    event.dataTransfer.effectAllowed = this.effect;
    event.dataTransfer.setData(this.format, JSON.stringify(args));

    var target = this.getCurrentTarget(event);
    target.style.backgroundColor = this.dragItemBgColor;
    target.style.cursor = "move"; // You can do this or use a css class to change the cursor
    return true;
  }

  /**
   * @method drag
   */
  drag(event: any) {
    return true;
  }

  /**
   * @method dragEnd
   * @param {event for drag item} event
   */
  dragEnd(event: any) {
    var target = this.getCurrentTarget(event);
    target.style.backgroundColor = "";
    target.style.cursor = "move";

    // clear process drag
    this.clearProcess();
    return true;
  }

  /**
   * @method dragEnter
   * @param {event of droppable container} event
   */
  dragEnter(event: any) {
    var target = this.getCurrentTarget(event);
    target.style.border = this.dropContainerBorderStyle;
    target.style.opacity = this.dropContainerOpacity;
    return false;
  }

  // dragover event of droppable container
  dragOver(event: any) {
    this.preventDefault(event);
    var target = this.getCurrentTarget(event);
    target.style.border = this.dropContainerBorderStyle;
    target.style.opacity = this.dropContainerOpacity;

    event.dataTransfer.dropEffect = this.effect;
    return false;
  }

  /**
   * @method dragLeave
   */
  dragLeave(event: any) {
    //var target = this.getCurrentTarget(event);
    // target.style.border = '';
    //target.style.opacity = 1;
    return false;
  }

  /**
   * @method drop event of container where item drop
   * @param event for drop event handler
   * @param next for pass item to next level
   */
  drop(event: any, next: any) {
    this.preventDefault(event);

    let dropItem = JSON.parse(event.dataTransfer.getData(this.format));
    next(dropItem);
    // next(this.dragItem);

    // var target = this.getCurrentTarget(event);
    // target.style.border = '';
    //target.style.opacity = 1;
    return false;
  }

  /**
   * @method getCurrentTarget
   * @param {event}
   */
  getCurrentTarget(event: any) {
    if (event.toElement) {
      return event.toElement;
    } else if (event.currentTarget) {
      return event.currentTarget;
    } else if (event.srcElement) {
      return event.srcElement;
    } else {
      return null;
    }
  }

  /**
   * @method getMousePosition
   * @param e
   */
  getMousePosition(e: any) {
    var posx = 0,
      posy = 0;
    if (!e) {
      e = window.event;
    }

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy,
    };
  }

  /**
   * @method preventDefault
   * @param {event for target} e
   */
  preventDefault(e: any) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }

  // clear drag and drop process
  clearProcess() {
    this.dragItem = undefined;
    this.isDragEnter = false;

    // clear effect on drop element
    this.dropElement.style.border = "";
    this.dropElement.style.opacity = 1;

    // call dragend func if exists
    if (this.dragEndCBFn) {
      this.dragEndCBFn();
    }
  }
}

// export object of drag drop service
export { DragDrop as default };
