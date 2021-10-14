---

title: 'The Cat Garden Guide'
date: '2021-10-07'
tabs:
  - title: 'sources'
    config: 
      required_fields:
        title: 'title'
        type: 'type'
        url: 'url'
      icons:
        video: '🎥'
        academic: '🥼'
        book: '📖'
        article: '📰'
        database: '📊'
      columns: [ 'title', 'by', 'year' ]
      searchable_fields: [ 'title', 'by' ]
      filterable_fields: [ 'type', 'year' ]
    data: 
      - title: 'How We Domesticated Cats (Twice)'
        url: 'https://www.youtube.com/watch?v=CYPJzQppANo'
        type: 'video'
        by: 'PBS Eons'
        seconds: 492
        year: 2019
      - title: 'The evolutionary origins of the cat attractant nepetalactone in catnip'
        url: 'https://www.science.org/doi/10.1126/sciadv.aba0721'
        type: 'academic'
        by: 'Science Advances'
        pages: 14
        year: 2020
      - title: 'Responsiveness of cats (Felidae) to silver vine (Actinidia polygama), Tatarian honeysuckle (Lonicera tatarica), valerian (Valeriana officinalis) and catnip (Nepeta cataria)'
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5356310/'
        by: 'BMC Veterinary Research'
        type: 'academic'
        pages: 16
        year: 2017
      - title: 'Encyclopedia of Life'
        url: 'https://eol.org/'
        type: 'database'
        by: "Smithsonian Institutio's National Museum of Natural History"
        year: 2021
  - title: 'plants mentioned'
    config: 
      required_fields:
        title: 'latin_name'
        type: 'growth_form'
        url: 'wikipedia'
      icons:
        shrub: '🌳'
        subshrub: '🌳'
        tree: '🌲'
        grass: '🌾'
        'perennial herb': '🌱'
        'annual herb': '🌱'
        herb: '🌱'
        forb: '🌱'
        vine: '🌿'
        liana: '🌿'
        climber: '🌿'
      columns: ['latin_name', 'common_name', 'family']
      searchable_fields: [ 'latin_name', 'common_name', 'origin', 'family' ]
      filterable_fields: [ 'family', 'growth_form' ]
    data: 
      - latin_name: 'Nepeta cataria'
        common_name: 'catnip'
        wikipedia: 'https://en.wikipedia.org/wiki/Catnip'
        family: 'mint/sage (Lamiaceae)'
        growth_form: 'perennial herb'
        origin: 'Eurasia'
      - latin_name: 'Valeriana officinalis'
        common_name: 'valerian root'
        wikipedia: 'https://en.wikipedia.org/wiki/Valerian_(herb)'
        family: 'honeysuckle (Caprifoliaceae)'
        growth_form: 'perennial herb'
        origin: 'Eurasia'
      - latin_name: 'Lonicera tatarica'
        common_name: 'tatarian honeysuckle'
        wikipedia: 'https://en.wikipedia.org/wiki/Lonicera_tatarica'
        family: 'honeysuckle (Caprifoliaceae)'
        growth_form: 'shrub'
        origin: 'Siberia and Eastern Asia'
      - latin_name: 'Actinidia polygama'
        common_name: 'silver vine'
        wikipedia: 'https://en.wikipedia.org/wiki/Actinidia_polygama'
        family: 'kiwi (Actinidiaceae)'
        growth_form: 'vine'
        origin: 'Korea, Japan, China'
      - latin_name: 'Paeonia anomala'
        common_name: 'anomalous paeonia'
        wikipedia: 'https://en.wikipedia.org/wiki/Paeonia_anomala'
        family: 'peony (Paeoniaceae)'
        growth_form: 'perennial herb'
        origin: 'Western and Central Asia'
      - latin_name: 'Nepeta racemosa'
        common_name: 'dwarf catnip'
        wikipedia: 'https://en.wikipedia.org/wiki/Nepeta_racemosa'
        family: 'catnip (Nepetaceae)'
        growth_form: 'perennial herb'
        origin: 'Eastern Turkey to Northwestern Iran'
      - latin_name: 'Acalypha indica'
        common_name: 'kuppimeni'
        wikipedia: 'https://en.wikipedia.org/wiki/Acalypha_indica'
        family: 'spurge (Euphorbiaceae)'
        growth_form: 'annual herb'
        origin: 'Old World Tropics'
      - latin_name: 'Cymbopogon citratus'
        common_name: 'lemongrass'
        wikipedia: 'https://en.wikipedia.org/wiki/Cymbopogon_citratus'
        family: 'grass (Poaceae)'
        growth_form: 'grass'
        origin: 'Maritime Southeast Asia'
      - latin_name: 'Teucrium marum'
        common_name: 'cat thyme'
        wikipedia: 'https://en.wikipedia.org/wiki/Teucrium_marum'
        family: 'mint/sage (Lamiaceae)'
        growth_form: 'shrub'
        origin: 'Spain and Western Mediterranean'
      - latin_name: 'Dactylis glomerata'
        common_name: 'catgrass'
        wikipedia: 'https://en.wikipedia.org/wiki/Dactylis_glomerata'
        family: 'grass (Poaceae)'
        growth_form: 'grass'
        origin: 'Temperate Eurasia and Northern Africa'
      - latin_name: 'Avena sativa'
        common_name: 'oat'
        wikipedia: 'https://en.wikipedia.org/wiki/Oat'
        family: 'grass (Poaceae)'
        growth_form: 'grass'
        origin: 'Middle East'
      - latin_name: 'Hordeum vulgare'
        common_name: 'barley'
        wikipedia: 'https://en.wikipedia.org/wiki/Barley'
        family: 'grass (Poaceae)'
        growth_form: 'grass'
        origin: 'Western Asia and Northern Africa'
      - latin_name: 'Secale cereale'
        common_name: 'rye'
        wikipedia: 'https://en.wikipedia.org/wiki/Rye'
        family: 'grass (Poaceae)'
        growth_form: 'grass'
        origin: 'Mediterranean Region and Western Asia'
      - latin_name: 'Triticum aestivum'
        common_name: 'common wheat'
        wikipedia: 'https://en.wikipedia.org/wiki/Common_wheat'
        family: 'grass (Poaceae)'
        growth_form: 'grass'
        origin: 'Eastern Mediterranean or the Middle East'
      - latin_name: 'Petroselinum crispum'
        common_name: 'parsley'
        wikipedia: 'https://en.wikipedia.org/wiki/Parsley'
        family: 'carrot (Apiaceae)'
        growth_form: 'annual herb'
        origin: 'Eastern Mediterranean'
      - latin_name: 'Daucus carota'
        common_name: 'carrot'
        wikipedia: 'https://en.wikipedia.org/wiki/Carrot'
        family: 'carrot (Apiaceae)'
        growth_form: 'annual herb'
        origin: 'Europe and Southwest Asia'
      - latin_name: 'Spinacia oleracea'
        common_name: 'spinach'
        wikipedia: 'https://en.wikipedia.org/wiki/Spinach'
        family: 'amaranth (Amaranthaceae)'
        growth_form: 'annual herb'
        origin: 'Western Asia'
      - latin_name: 'Zinnia elegans'
        common_name: 'elegant zinnia'
        wikipedia: 'https://en.wikipedia.org/wiki/Zinnia_elegans'
        eol: 'https://eol.org/pages/22991350'
        family: 'sunflower (Asteraceae)'
        growth_form: 'annual herb'
        origin: 'Mexico'
      - latin_name: 'Tagetes erecta'
        common_name: 'mexican marigold'
        wikipedia: 'https://en.wikipedia.org/wiki/Tagetes_erecta'
        family: 'sunflower (Asteraceae)'
        growth_form: 'annual herb'
        origin: 'Mexico'
      - latin_name: 'Viola tricolor'
        common_name: 'johnny jump-ups'
        wikipedia: 'https://en.wikipedia.org/wiki/Viola_tricolor'
        family: 'violet (Violaceae)'
        growth_form: 'annual herb'
        origin: 'Eurasia'
      - latin_name: 'Salvia rosmarinus'
        common_name: 'rosemary'
        wikipedia: 'https://en.wikipedia.org/wiki/Rosemary'
        family: 'mint/sage (Lamiaceae)'
        growth_form: 'shrub'
        origin: 'Mediterranean'
      - latin_name: 'Phaseolus vulgaris'
        common_name: 'common bean'
        wikipedia: 'https://en.wikipedia.org/wiki/Phaseolus_vulgaris'
        family: 'legume (Fabaceae)'
        growth_form: 'vine'
        origin: 'Mesoamerica and South America'
      - latin_name: 'Medicago sativa'
        common_name: 'alfalfa'
        wikipedia: 'https://en.wikipedia.org/wiki/Alfalfa'
        family: 'legume (Fabaceae)'
        growth_form: 'perennial herb'
        origin: 'South-Central Asia'
      - latin_name: 'Melissa officinalis'
        common_name: 'lemon balm'
        wikipedia: 'https://en.wikipedia.org/wiki/Lemon_balm'
        family: 'mint/sage (Lamiaceae)'
        growth_form: 'perennial herb'
        origin: 'South-Central Europe, Mediterranean, and Central Asia'
      - latin_name: 'Lavandula angustifolia'
        common_name: 'lavender'
        wikipedia: 'https://en.wikipedia.org/wiki/Lavendula_angustifolia'
        family: 'mint/sage (Lamiaceae)'
        growth_form: 'shrub'
        origin: 'Mediterranean'
      - latin_name: 'Salvia officinalis'
        common_name: 'common sage'
        wikipedia: 'https://en.wikipedia.org/wiki/Salvia_officinalis'
        family: 'mint/sage (Lamiaceae)'
        growth_form: 'subshrub'
        origin: 'Mediterranean'

---


Although cats are obligate carnivores, that doesn't mean they consume 0 plant matter or that they don't rely on plants in many other ways. Cats may eat or chew on a variety of plants for fiber, added nutrients, or even zoopharmacognosy.

Cat domestication is complex topic of research. Current research suggests that there were two major periods of cat domestication. Once in Southwest Asia, around 10k years ago, and once in Egypt around 4k years ago. But cats have also interbred with wildcats (*Felis silvestris lybica* or *F. lybica*) throughout Africa and Eurasia, so it's very difficult to pinpoint what their original habitats were like. But looking at the ranges of its wildcat ancestors can still give us clues about the flora ancestral cats might've interacted with and relied on.

I've come up with a couple of categories of plants that cats might utilize in different ways and listed some examples of plants that might be good fits for cats.

## 1. Catnip, silver vine, and other mosquitto repellents
That euphoric reaction cats exhibit after being exposed to catnip (sometimes called catmint) is due to a chemical called *nepetalactone*. However, this chemical doesn't just exist in catnip (*Nepeta cataria*), but also in most other plants in the *Nepeta* genus. In fact, it's found in some other plants in the mint/sage family (*Lamiaceae*). And it's even found in totally unrelated plants like Valerian Root or Tartarian Honeysuckle from the honeysuckle family. In fact, it's not even the most effective at triggerring this response. 

When you look up alternatives to catnip, you'll usually come across 3 plants mainly: Valerian Root, Tartarian Root, and Silver Vine. The reason these always show up goes back to a study that tested the effectiveness of these plants compared to Catnip. It found that Tartarian Honeysuckel and Valerian Root both triggered this response in about 50% of cats while Catnip affected 66% and Silver Vine came out to 80% (among cats that weren't affected by catnip, this percentage was actually even higher!). Because veternary science in general is seriously underfunded/understudied, studies like this tend to have an outsized effect. But these four plants are far from the only plants that could potentially trigger this response.

Besides looking at other plants known to contain nepetalactone (e.g. *Paeonia anomala* or other catnip species like Dwarf Catnip), there's a lot of cultural knowledge of potentially even more potent plants that has yet to be studied formally:
 - The effects of kuppaimeni (*Acalypha indica*) on cats is widely known throughout much of India. It contains nepetalactones and iridolactones which are widely said to cause a reaction much stronger than catnip
 - Lemongrass (*Cymbopogon citratus*) is often said to have catnip-like effects on cats. I've seen this claim through numerous online articles, but haven't yet been able to track down the source for it. It is also used in cooking in many cuisines and traditional medicines throughout the world. It is known to repel stable flies (and likely other insects).
 - Silver Vine (*Actinidia polygama*), a plant in the kiwi family that is native to parts of Korea, China, and Japan, is one of the few plants whose effects on cats, though known widely by local people, has been formally studied. It affects about 4 in 5 cats compared to the 2 in 3 that are affected by catnip. Its edible fruit and other plant parts have been used culinarily, medicinally, and for other purposes for a long time. 
 - Cat thyme (*Teucrium marum*) is also a common alternative to catnip. It is in the mint family as well and likely contains nepetalactones.

### Why are they so into it?
Catnip, like many of the plants mentioned above have also been known for a long time as insect repellents. A 2021 paper published in Science Advances argued for the hypothesis that the reason cats have this reaction, which causes them to rub themselves against the plant, likely has a lot to do with getting the insect-repelling chemicals on their fur to repel mosquitoes and other insects that may transmit feline diseases.

## 2. Catgrass! 
Cats graze on grass for many possible reasons. It might be for the folic acid, which helps the blood carry more oxygen; they may be using it as a laxative; it may be to help with sore throats; it may be for the emetic properties (sometimes cats eat indigestible things and need help puking them back out); or it might just be because they enjoy the texture! Regardless of the reasons, grazing on grass is a common and healthy behavior for cats.

When you look up "catgrass" you'll like come across a few different species. Usually the word is just used to refer to grass that cats can safely eat (most grass) and in those cases you'll probably either find wheat seeds or a blend of wheat, barley, oat, and rye grass seeds (oat seems to be the most commonly beloved of those). Alternatively, "catgrass" could be referring to *Dactylis glomerata* which is native to temperate Eurasia and Northern Africa. It's often used as hay because of its high yields and high sugar content.

Most grasses are best grazed when young and tender, but become too course to be grazed on once they mature.

## 3. Nutritious herbs
Other plants cats like to snack on are often high in minerals and nutrients important for their health. Parsley, carrot tops, and spinach are common favorites that are great sources of vitamins A and C and many other vitamins and nutrients. Cats also like to snack on many edible flowers like zinnias, marigolds, and johnny-jump-ups. Cats have also been known to munch on rosemary, beans sprouts, and even alfalfa sprouts (be careful to make sure you have healthy soil with alfalfa since alfalfa is a hyperaccumulator of many heavy metals). Garden mint can also be eaten, but can be toxic if large amounts are consumed (the same is actually true for catnip). However cats don't usually eat mint, but rather just roll around in it like they do with catnip. A safer mint species could be lemon balm, species of common sage, lavender, or even rosemary (yes, these are all in the mint/sage family).

## Plants to avoid
Although this article points out specific species which are known to be safe or unsafe to eat for cats, cats don't usually check for a scientific identification of a plant before munching away. Cats, like many other animals including humans, tend to just chew on the tender new growth of many different plant species that don't exhibit any obvious signs on toxicity. New growth in plants is usually the least likely to contain toxic compounds which is why we're able to get away with eating vegetable greens like spinach which may otherwise be toxic or unpalettable if eaten after they've matured. However, this isn't fullproof and cats do can make mistakes. There are certain herbs, as well as houseplants, that are known to be harmful to cats and should be avoided.

There are a few plants that are highly toxic and even small amounts could be life-threatening. Here's a partial list of some of the most common culprits:
 - Amaryllis (*Amaryllis* spp.)
 - Autumn Crocus (*Colchicum autumnale*)
 - Azaleas (*Azalea* spp.) and other plants in the *Rhododendrons* family
 - Castor Bean (*Ricinus communis*)
 - Cyclamen (*Cyclamen* spp.)
 - Daffodils (*Narcissus* spp.)
 - Easter Lillies and most other plants in the *Liliaceae* family. 
 - Oleander (*Nerium oleander*)
 - Tulips (*Tulipa* spp.) 
 - Sago Palm (*Cycas revoluta*)

---

<details>
<summary>
Additional resources
</summary>

## Other resources

**Figure out if a plant is toxic for cats**: 
By far the most complete database I've come across is the [ACPCA's Toxic and Non-toxic Plants List](https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants). It contains data on the toxicity to cats, dogs, and horses of around 1,000 species of plants. A far cry from the nearly 400,000 known species of plants, but not too bad when you're just considering the most common houseplants and garden plants.

**Find other plants that might excite cats**: 
If you feel like doing some original research on plants that contain nepetalactones, there are a couple of different projects attempting the massive task of tracking all documented compounds present in different plant species:
 - Your best bet is [KNApSAcK](http://www.knapsackfamily.com/knapsack_core/result.php?sname=all&word=nepetalactone) which is a massive attempt to catalog all secondary plant metabolites. It's web search features are not very user friendly... but it's likely the most complete resource you'll find.
 - [COCONUT (COlleCtion of Open Natural prodUcTs)](https://coconut.naturalproducts.net/) is likely the next most useful resource you'll find. It's a more complete collection of information about natural products. If doesn't directly contain information about which species these compounds have been found in, but it links to many other useful databases (like KNApSAcK) that may.
 - Then there are a couple of not directly related, but still potentially useful databases I mostly just wanna list out here for myself: [FooDB](https://foodb.ca/) is focused on food instead of species, but is very thorough. [Phenol-explorer](http://phenol-explorer.eu/) is restricted to phenols found in food, but contains a lot of cool information on the effects of processing and cooking on these compounds. [TCMIO](http://tcmio.xielab.net) is focused on compounds that show up in plants used in TCM (there's at least one nepelactone is found in TCM plants). 

**Learn more about the interaction of cats in their native habitats with plants**:
[Global Biotic Interactions (GloBI)](https://www.globalbioticinteractions.org/?interactionType=interactsWith&sourceTaxon=Felis&targetTaxon=Plantae) is an incredible, though incomplete database attempting to track all documented "interactions" (e.g. "preys upon", "is paratized by", "pollinates", etc) between any given species. It might be a helpful resource if you want to, say, see what kinds of plants the Asiatic Wildcat interacts with.
</details>
