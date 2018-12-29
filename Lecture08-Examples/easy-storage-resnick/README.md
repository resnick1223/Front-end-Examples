# easy-storage

用接近mongodb的api使用webstorage

## Example

```
var notes = storage.addCollection("notes");

notes.insert({
    title: "some title",
    text: "some text" 
});

var note = notes.get(2);

note.text = "some text 2";

notes.update(note);

notes.delete(note);

```