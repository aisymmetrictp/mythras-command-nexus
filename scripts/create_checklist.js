const ExcelJS = require('exceljs');
const path = require('path');

async function createChecklist() {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Overall Builds', {
    properties: { tabColor: { argb: 'FFD4A853' } },
    views: [{ state: 'frozen', ySplit: 1 }]
  });

  // Define columns
  ws.columns = [
    { header: 'Cookie Name', key: 'name', width: 30 },
    { header: 'Rarity', key: 'rarity', width: 14 },
    { header: 'Type', key: 'type', width: 12 },
    { header: 'Beascuit', key: 'beascuit', width: 30 },
    { header: 'Attunes', key: 'attunes', width: 20 },
    { header: 'Toppings', key: 'toppings', width: 34 },
    { header: 'Substat Priority', key: 'substats', width: 32 },
    { header: 'Tart', key: 'tart', width: 18 },
    { header: 'Tart Stat', key: 'tartStat', width: 16 },
    { header: 'YT Video URL', key: 'ytUrl', width: 52 },
    { header: 'YT Video Title', key: 'ytTitle', width: 52 },
    { header: 'Has Gear Guide', key: 'hasGuide', width: 16 },
    { header: 'Page Live', key: 'pageLive', width: 12 },
    { header: 'Last Updated', key: 'updated', width: 14 },
  ];

  // Style header row
  const headerRow = ws.getRow(1);
  headerRow.height = 28;
  headerRow.eachCell(cell => {
    cell.font = { name: 'Arial', bold: true, color: { argb: 'FF060610' }, size: 11 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD4A853' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = {
      top: { style: 'thin', color: { argb: 'FF333333' } },
      bottom: { style: 'thin', color: { argb: 'FF333333' } },
      left: { style: 'thin', color: { argb: 'FF333333' } },
      right: { style: 'thin', color: { argb: 'FF333333' } },
    };
  });

  ws.autoFilter = 'A1:N1';

  const rarityColors = {
    Beast: 'FF4A0000', Ancient: 'FF3D2E00', Legendary: 'FF2D1B4E',
    Dragon: 'FF3D1E00', 'Super Epic': 'FF3D0F2E', Epic: 'FF0F1E3D',
    Rare: 'FF0F2D1E', Common: 'FF1E1E1E', Special: 'FF0F2D3D',
  };

  const cookies = [
    // Beast
    ['Burning Spice Cookie','Beast','Charge','Tainted Burning Chewy','DMGRB x3','Destructive Raspberry x5','ATK + ATKS + DMGR + CD','Raspberry','Attack','https://www.youtube.com/watch?v=-EYsa5-s_9U','Burning Spice Cookie 40 Points','No','Yes','2026-03-14'],
    ['Eternal Sugar Cookie','Beast','Bomber','Legendary Poisonous Spicy','Poison DMG x4','Indolent Raspberry x5','DMGRB + CD/18% + ATK','Raspberry','Attack','https://www.youtube.com/watch?v=r3pp5E8LPp0','The Eternal Sugar Human','No','Yes','2026-03-14'],
    ['Mystic Flour Cookie','Beast','Healing','Legendary Sweet','CD x2 + ATK x2','Gambit Chocolate x5','CD/40% + DMGR + HP','Chocolate','Cooldown','https://www.youtube.com/watch?v=nwQMLyUH8CQ','first grain and mystic flour','No','Yes','2026-03-14'],
    ['Shadow Milk Cookie','Beast','Magic','Legendary Zesty','DMGRB x4','Deceitful Chocolate x5','ATK + CD + DMGR','Chocolate','Cooldown','https://www.youtube.com/watch?v=uXoSrf7DjsM','Shadow Milk Cookie 40 Points','No','Yes','2026-03-14'],
    ['Silent Salt Cookie','Beast','Ambush','Legendary Crispy','DMGRB x4','Silent Raspberry x5','ATK + CD/23% + DMGR/25% + HP','Raspberry','Attack','https://www.youtube.com/watch?v=MMG9viVIzGo','Silent Salt Cookie Build | Best Gear & Toppings Guide','Yes','Yes','2026-03-14'],
    // Ancient
    ['Dark Cacao Cookie','Ancient','Charge','Tainted Dark Chewy','DMGRB x3','Gambit Chocolate x5','CD + DMGR + ATK + DMGRB','Chocolate','Cooldown','https://www.youtube.com/watch?v=BhCkiqvNRx0','dark cacao kingdom','No','Yes','2026-03-14'],
    ['Golden Cheese Cookie','Ancient','Ranged','Legendary Light','DMGRB x4','Radiant Cheese Raspberry x5','DMGRB + ATK + CD','Raspberry','Attack','https://www.youtube.com/watch?v=YeKOe3lgB2Y','Fave Golden Cheese Sprite','No','Yes','2026-03-14'],
    ['Hollyberry Cookie','Ancient','Defense','Legendary Hard','HP x4','Passionate Almond x5','CD/35% + DMGR + HP','Almond','DMG Resist','https://www.youtube.com/watch?v=EJYnHvdaUTg','Hollyberry Time','No','Yes','2026-03-14'],
    ['Pure Vanilla Cookie','Ancient','Healing','Tainted Gleaming Sweet','DMGRB x3 + CD x1','Truthful Raspberry x5','DMGR/50% + HP/30% + CD/15%','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['White Lily Cookie','Ancient','Bomber','Legendary Spicy','DMGRB x4','Blooming Raspberry x5','CD + DMGR + ATK','Raspberry','Attack','https://www.youtube.com/watch?v=niy0puWNkdI','Awakened White Lily Cookie Gear Guide','Yes','Yes','2026-03-14'],
    // Legendary
    ['Black Pearl Cookie','Legendary','Ambush','Legendary Crispy','DMGRB x4','Sea Salt Raspberry x5','DMGR + CD/20% + ATK','Raspberry','Attack','https://www.youtube.com/watch?v=LcdkWwFKb54','happy black pearl','No','Yes','2026-03-14'],
    ['Dark Enchantress Cookie','Legendary','Magic','Legendary Zesty','DMGRB x4','Looming Dark Raspberry x5','ATK/90% + CD/12% + DMGR','Raspberry','Attack','https://www.youtube.com/watch?v=DkG_afMpjyY','Dark Enchantress Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Fire Spirit Cookie','Legendary','Magic','Tainted Burning Zesty','CD x3','Flaming Raspberry x5','CD/35% + DMGR + DMGRB + ATK','Raspberry','Attack','https://www.youtube.com/watch?v=mZLSuaoDBSc','Fire Spirit Mural','No','Yes','2026-03-14'],
    ['Frost Queen Cookie','Legendary','Magic','Tainted Frozen Zesty','DMGRB x3','Frosted Crystal Raspberry x5','ATK + DMGR + CD + DMGRB','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Millennial Tree Cookie','Legendary','Support','Legendary Hearty','CD x4','Ancient Root Peanut x5','HP + CD + DMGR + ATK','Peanut','HP','https://www.youtube.com/watch?v=1UIyrlaw3Yk','Millennial Tree Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Moonlight Cookie','Legendary','Magic','Legendary Zesty','CD x2 + DMGRB x2','Moonkissed Raspberry x5','CD + ATK + CRIT + DMGR','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Sea Fairy Cookie','Legendary','Bomber','Legendary Spicy','DMGRB x2 + CD x2','Sea Salt Chocolate x5','CD + ATK + DMGR','Chocolate','Cooldown','https://www.youtube.com/watch?v=doDl71tioXw','Sea Fairy Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Stormbringer Cookie','Legendary','Charge','Legendary Thunderous Chewy','Elec DMG x4','Fuzzy Wuzzy Apple Jelly x5','CRIT + DMGR + ATK','Apple Jelly','Critical','','','No','Yes','2026-03-14'],
    ['Sugar Swan Cookie','Legendary','Healing','','','','','','','https://www.youtube.com/watch?v=SDmGjTdZbwA','black sugar swan','No','Yes','2026-03-14'],
    ['Wind Archer Cookie','Legendary','Ranged','Legendary Light','ATKS x2 + CD x2','Life-Sprouting Raspberry x5','ATKS + ATK + DMGR','Raspberry','Attack','https://www.youtube.com/watch?v=DLI6Up__o-0','Wind Archer Cookie Gear Guide','Yes','Yes','2026-03-14'],
    // Dragon
    ['Pitaya Dragon Cookie','Dragon','Charge','Legendary Burning Chewy','Fire DMG x4','Draconic Raspberry x5','ATK + DMGR + CD','Raspberry','Attack','','','No','Yes','2026-03-14'],
    // Super Epic
    ['Camellia Cookie','Super Epic','Charge','Legendary Chewy','DMGRB x2 + ATK x2','Fragrant Almond x5','DMGR + CD + ATK','Almond','DMG Resist','','','No','Yes','2026-03-14'],
    ['Capsaicin Cookie','Super Epic','Charge','Legendary Burning Chewy','Fire DMG x4','Trio Raspberry x5','ATK + DMGR + ATKS','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Clotted Cream Cookie','Super Epic','Magic','Legendary Zesty','DMGRB x2 + CRIT x2','Raspberry x5','ATK + DMGR + CD','Raspberry','Attack','https://www.youtube.com/watch?v=tHDeKvUQ3YE','clotted cream','No','Yes','2026-03-14'],
    ['Crimson Coral Cookie','Super Epic','Defense','Tainted Surging Hard','DMGR x3','Sea Salt Chocolate x5','CD + DMGR + HP','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    ['Doughael Cookie','Super Epic','Healing','Legendary Sweet','DMGR x3 + CD x1','Destined Peanut x5','HP + CD + DMGR','Peanut','HP','https://www.youtube.com/watch?v=HklziH0UEds','Doughael Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Elder Faerie Cookie','Super Epic','Defense','Legendary Hard','HP x4','Almonds x5','HP + DMGR + CD','Almond','DMG Resist','','','No','Yes','2026-03-14'],
    ['Oyster Cookie','Super Epic','Support','Legendary Hearty','CD x2 + DMGR x1','Chocolate x5','CD + DMGR + ATKS','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    ['Sherbet Cookie','Super Epic','Ranged','Legendary Frozen Light','Ice DMG x4','Frosted Crystal Chocolate x5','CD + DMGR + CRIT','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    ['Shining Glitter Cookie','Super Epic','Magic','Legendary Zesty','CD x2 + DMGR x2','Tropical Rock Apple Jelly x5','CRIT + DMGR + CD','Apple Jelly','Critical','','','No','Yes','2026-03-14'],
    ['Stardust Cookie','Super Epic','Ambush','Legendary Crispy','CD x3','Moonkissed Apple Jelly x5','CRIT + CD + DMGR','Apple Jelly','Critical','','','No','Yes','2026-03-14'],
    // Epic (key ones)
    ['Affogato Cookie','Epic','Bomber','Legendary Poisonous Spicy','Poison DMG x4','Raspberry x5','ATK + CRIT + CD + DMGR','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Charcoal Cookie','Epic','Magic','Legendary Dark Zesty','Dark DMG x4','Silent Raspberry x5','CD + DMGR + DBR','Raspberry','Attack','https://www.youtube.com/watch?v=Fjig-QhtH6Q','Charcoal Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Chess Cocoa Cookie','Epic','Magic','Legendary Spicy','ATK x2 + DMGRB x2','Gambit Chocolate x5','CD + DMGR + ATK','Chocolate','Cooldown','https://www.youtube.com/watch?v=c_SyXbmG0ac','Chess Choco Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Cocoa Cookie','Epic','Defense','Legendary Hard','CD x4','Almonds x5','CD + DMGR + ATK + ATKS','Almond','DMG Resist','','','No','Yes','2026-03-14'],
    ['Cotton Cookie','Epic','Support','Tainted Verdant Hearty','ATK x3','Frosted Crystal Chocolate x5','CD + DMGR + ATK','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    ['Eclair Cookie','Epic','Support','Legendary Hearty','DMGR x2 + CD x2','Chocolate x5','CD/20% + DMGR/20% + ATK','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    ['Espresso Cookie','Epic','Magic','Legendary Earthen Zesty','Earth DMG x4','Raspberry x5','ATK + CRIT + DMGR','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Financier Cookie','Epic','Defense','Tainted Light Hard','DMGR x3','Truthful Almonds x5','CD + DMGR + HP','Almond','DMG Resist','','','No','Yes','2026-03-14'],
    ['Menthol Cookie','Epic','Bomber','Legendary Surging Spicy','Water DMG x4','Destined Raspberry x5','CD + ATK + ATKS','Raspberry','Attack','https://www.youtube.com/watch?v=Wi4hfh8SgZA','Menthol Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Mold Dough Cookie','Epic','Magic','Legendary Chaotic Chewy','Chaos DMG x4','Looming Dark Raspberry x5','HP + DMGR + ATKS','Raspberry','Attack','https://www.youtube.com/watch?v=W8NBoqiVJk8','Mold Dough Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Salt Cellar Cookie','Epic','Defense','Tainted Steelen Hard','ATKS x3','Blooming Walnuts x5','DEF + CD + DMGR + DBR','Walnut','Defense','https://www.youtube.com/watch?v=fm_eWf7_6Vc','Salt Cellar Cookie Build','Yes','Yes','2026-03-14'],
    ['Seltzer Cookie','Epic','Support','Tainted Surging Hearty','ATK x3','Destined Chocolate x5','CD + ATKS + ATK','Chocolate','Cooldown','https://www.youtube.com/watch?v=TRSCYXgPIzs','Seltzer Cookie Gear Guide','Yes','Yes','2026-03-14'],
    ['Wildberry Cookie','Epic','Defense','Legendary Steelen Chewy','Steel DMG x4','Passionate Almonds x5','HP + DMGR','Almond','DMG Resist','','','No','Yes','2026-03-14'],
    // Special
    ['Cream Ferret Cookie','Special','Support','Legendary Hearty','ATK x4','Chocolate x5','CD + ATK + ATKS + CRIT','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    ['Marshmallow Bunny Cookie','Special','Support','Legendary Hearty','ATK x2 + CD x2','Candy x5','AMPB/25% + CD + ATK + CRIT','Candy','Amplify Buff','','','No','Yes','2026-03-14'],
    ['Snapdragon Cookie','Special','Support','Legendary Hearty','ATK x4','Draconic Chocolate x5','CD + ATK + CRIT + ATKS','Chocolate','Cooldown','','','No','Yes','2026-03-14'],
    // Rare
    ['Adventurer Cookie','Rare','Ambush','Legendary Crispy','CD x4','Raspberry x5','ATK + CD','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Knight Cookie','Rare','Defense','Legendary Hard','CD x4','Almonds x5','CD + DMGR','Almond','DMG Resist','','','No','Yes','2026-03-14'],
    // Common
    ['GingerBrave','Common','Charge','Legendary Chewy','DMGR x4','Raspberry x5','ATK + CD + DMGR','Raspberry','Attack','','','No','Yes','2026-03-14'],
    ['Wizard Cookie','Common','Magic','Legendary Thunderous Zesty','Electric DMG x4','Raspberry x5','ATK + CD + DMGR','Raspberry','Attack','','','No','Yes','2026-03-14'],
  ];

  const darkBg = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0C0C18' } };
  const borderStyle = {
    top: { style: 'thin', color: { argb: 'FF333333' } },
    bottom: { style: 'thin', color: { argb: 'FF333333' } },
    left: { style: 'thin', color: { argb: 'FF333333' } },
    right: { style: 'thin', color: { argb: 'FF333333' } },
  };

  cookies.forEach((cookieData, idx) => {
    const row = ws.addRow({
      name: cookieData[0], rarity: cookieData[1], type: cookieData[2],
      beascuit: cookieData[3], attunes: cookieData[4], toppings: cookieData[5],
      substats: cookieData[6], tart: cookieData[7], tartStat: cookieData[8],
      ytUrl: cookieData[9], ytTitle: cookieData[10], hasGuide: cookieData[11],
      pageLive: cookieData[12], updated: cookieData[13],
    });

    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.font = { name: 'Arial', size: 10, color: { argb: 'FFF5F5F7' } };
      cell.fill = darkBg;
      cell.border = borderStyle;
      cell.alignment = { vertical: 'middle' };

      // Rarity cell coloring
      if (colNumber === 2) {
        const rc = rarityColors[cookieData[1]];
        if (rc) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rc } };
        cell.font = { name: 'Arial', size: 10, color: { argb: 'FFF5F5F7' }, bold: true };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
      }
      // URL hyperlink
      if (colNumber === 10 && cookieData[9]) {
        cell.value = { text: cookieData[9], hyperlink: cookieData[9] };
        cell.font = { name: 'Arial', size: 10, color: { argb: 'FF6699FF' }, underline: true };
      }
      // Yes/No coloring
      if (colNumber === 12 || colNumber === 13) {
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        if (cell.value === 'Yes') {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A3D1A' } };
          cell.font = { name: 'Arial', size: 10, color: { argb: 'FF4ADE80' }, bold: true };
        } else if (cell.value === 'No') {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF3D1A1A' } };
          cell.font = { name: 'Arial', size: 10, color: { argb: 'FFFF6666' } };
        }
      }
    });
  });

  const output = path.join('C:', 'Users', 'Tyler', 'Desktop', 'Gamertag Mythras Website', 'Supporting documents', 'CookieRun_Gear_Guide_Checklist.xlsx');
  await wb.xlsx.writeFile(output);
  console.log(`Saved ${cookies.length} cookies to ${output}`);
}

createChecklist().catch(console.error);
