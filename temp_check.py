import pathlib
root = pathlib.Path("c:/Users/lenovo/Desktop/Portfolio-dev")
files = list(root.rglob('src/**/*.jsx'))
comps = [p for p in files if p.parent.name == 'components' or (len(p.parts) >= 3 and p.parts[-2] == 'projects')]
alltext = {p: p.read_text(encoding='utf-8', errors='ignore') for p in files}
unused = []
for comp in comps:
    name = comp.stem
    imported = False
    patterns = [
        'import ' + name,
        'import {' + name,
        'from "./' + name + '"',
        "from './" + name + "'",
        'from "../components/' + name + '"',
        "from '../components/" + name + "'",
        'from "../components/projects/' + name + '"',
        "from '../components/projects/" + name + "'"
    ]
    for p, txt in alltext.items():
        if p == comp:
            continue
        if any(pat in txt for pat in patterns) or (name in txt and 'lazy' in txt and name + ' = lazy' in txt):
            imported = True
            break
    if not imported:
        unused.append(str(comp).replace('\\', '/'))
print('UNUSED FILES:')
for u in unused:
    print(u)
print('TOTAL COMPONENTS', len(comps), 'UNUSED', len(unused))
