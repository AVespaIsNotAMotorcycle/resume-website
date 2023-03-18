const STELLARISMAPEDITOR = {
  name: 'Stellaris Map Editor',
  id: 'StellarisMapEditor',
  desc: 'A static map editor for Stellaris, made with Unity.',
  body: `
# Stellaris Map Editor
[View the GitHub repo](https://github.com/AVespaIsNotAMotorcycle/stellaris-map-editor)


An editor for static maps in Stellaris. It was written in C# via Unity in late 2020 - early 2021. Allows the placement of systems, hyperlanes, and nebulae, as well as defining the game settings. Does not allow the user to define the content of those systems; those are randomly generated on game start.


There are built versions ready to go for Mac and Windows in the Builds folder. Additionally, you can open the project in Unity.


Since the editor was written, some update to Stellaris seems to have made the maps this generates unloadable. I'm not sure whether static maps generally are broken, or if some change to the format would fix it.`,
  tags: [
    'Unity',
    'C#',
  ],
};

export default STELLARISMAPEDITOR;
