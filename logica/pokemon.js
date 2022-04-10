


    const arrayPokemons = [
      "audino",
      "bagon",
      "baltoy",
      "banette",
      "bidoof",
      "braviary",
      "bronzor",
      "carracosta",
      "charmeleon",
      "cresselia",
      "croagunk",
      "darmanitan",
      "deino",
      "emboar",
      "emolga",
      "exeggcute",
      "gabite",
      "girafarig",
      "gulpin",
      "haxorus",
      "heatmor",
      "heatran",
      "ivysaur",
      "jellicent",
      "jumpluff",
      "kangaskhan",
      "kricketune",
      "landorus",
      "ledyba",
      "loudred",
      "lumineon",
      "lunatone",
      "machamp",
      "magnezone",
      "mamoswine",
      "nosepass",
      "petilil",
      "pidgeotto",
      "pikachu",
      "pinsir",
      "poliwrath",
      "poochyena",
      "porygon2",
      "porygonz",
      "registeel",
      "relicanth",
      "remoraid",
      "rufflet",
      "sableye",
      "scolipede",
      "scrafty",
      "seaking",
      "sealeo",
      "silcoon",
      "simisear",
      "snivy",
      "snorlax",
      "spoink",
      "starly",
      "tirtouga",
      "trapinch",
      "treecko",
      "tyrogue",
      "vigoroth",
      "vulpix",
      "wailord",
      "wartortle",
      "whismur",
      "wingull",
      "yamask",
    ];
    function nameStartWith(lastletter, names) {
      return names.findIndex((name) => name[0] === lastletter);
    }

    let final_serie = [];

    arrayPokemons.forEach((name) => {
      let current_series = [];
      let current_name = name;

      current_series.push(current_name);
      arrayPokemons.splice(arrayPokemons.indexOf(current_name), 1);

      let next_index = nameStartWith(
        current_name[current_name.length - 1],
        arrayPokemons
      );
      while (next_index >= 0) {
        current_name = arrayPokemons[next_index];
        current_series.push(" " + current_name);
        arrayPokemons.splice(next_index, 1);
        next_index = nameStartWith(
          current_name[current_name.length - 1],
          arrayPokemons
        );
      }

      final_serie.push(current_series);
    });
    final_serie.forEach((element) => {
      console.log("Serie: " + element);
    });
  

