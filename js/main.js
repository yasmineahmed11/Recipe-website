document.addEventListener("DOMContentLoaded", function () {
  const recipes = {
      breakfast: {
          sweet: [
              {
                  name: "Crispy choco croissants",
                  about: "Indulge in the perfect blend of buttery, flaky pastry and rich chocolate with crispy choco croissants. These golden-brown delights feature layers of crisp, light dough wrapped around a luscious chocolate filling, creating an irresistible contrast between textures. Whether enjoyed warm with your morning coffee or as an afternoon treat, crispy choco croissants offer a decadent experience that’s both simple and satisfyingly sweet.",
                  ingredients: ["Flour", "Milk", "Eggs"],
                  instructions: `
                  <ol>
                      <li>
                      <p class="inst-title">Prepare the Dough:</p>
                      <p class="inst-dets"> Roll out store-bought puff pastry or prepare your own croissant dough by mixing flour, milk, eggs, butter, and a pinch of salt. Knead until smooth. Let the dough rest in the fridge for 30 minutes.</p></li>
                      <li>
                      <p class="inst-title">Add Chocolate:</p>
                       <p class="inst-dets">Roll the dough into a large rectangle. Cut into triangles with a base about 3 inches wide. Place a small piece of chocolate (or a spoonful of chocolate spread) at the base of each triangle.</p></li>
                      <li>
                      <p class="inst-title">Shape the Croissants: </p>
                      <p class="inst-dets">Starting from the base, gently roll each triangle towards the tip to form the croissant shape. Place the rolled croissants on a baking sheet lined with parchment paper, with the tip tucked underneath.</p></li>
                      <li>
                      <p class="inst-title">Bake:</p> 
                      <p class="inst-dets">Brush the croissants with an egg wash (1 beaten egg) for a golden crust. Bake in a preheated oven at 200°C (400°F) for 15-20 minutes, or until golden brown and crisp.</p></li>
                      <li><p class="inst-title">Serve:</p>
                       <p class="inst-dets">Let the croissants cool slightly before serving warm. Enjoy them with coffee or your favorite beverage!</p></li>
                  </ol>
              `,
                  image: "../images/breaksweet1.jpg"
              },
              {
                  name: "Homemade whole grain bun with butter",
                  about: "Homemade whole grain buns with butter offer a hearty, wholesome treat. Soft and packed with nutritious grains, these buns are perfect as a warm breakfast option or a snack, especially when paired with creamy butter for a comforting, satisfying flavor.",
                  ingredients: ["Bread", "Eggs", "Milk"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Mix the Ingredients:</p>
            <p class="inst-dets">In a large bowl, combine whole-grain flour, yeast, sugar, and salt. Gradually add warm water and melted butter, mixing until a dough forms.</p>
        </li>
        <li>
            <p class="inst-title">Knead the Dough:</p>
            <p class="inst-dets">Transfer the dough to a floured surface and knead for 8-10 minutes until smooth and elastic. Add a bit more flour if the dough is too sticky.</p>
        </li>
        <li>
            <p class="inst-title">Let the Dough Rise:</p>
            <p class="inst-dets">Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise in a warm place for about 1 hour or until doubled in size.</p>
        </li>
        <li>
            <p class="inst-title">Shape the Buns:</p>
            <p class="inst-dets">Punch down the dough and divide it into equal portions. Shape each portion into a round bun and place them on a baking sheet lined with parchment paper.</p>
        </li>
        <li>
            <p class="inst-title">Second Rise:</p>
            <p class="inst-dets">Cover the buns with a cloth and let them rise again for 30 minutes until slightly puffed.</p>
        </li>
        <li>
            <p class="inst-title">Bake:</p>
            <p class="inst-dets">Preheat the oven to 180°C (350°F). Brush the buns with a little melted butter and bake for 15-20 minutes, or until golden brown.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Allow the buns to cool slightly, then enjoy with a spread of butter while they’re still warm!</p>
        </li>
    </ol>
`,
                  image: "../images/breaksweet2.jpg" 
              }
          ],
          savory: [
              {
                  name: "Avocado bacon sandwich with lettuce",
                  about: "The avocado bacon sandwich with lettuce combines creamy avocado, crispy bacon, and fresh lettuce for a deliciously satisfying bite. Packed with flavors and textures, it's a perfect option for a savory and filling meal.",
                  ingredients: ["Eggs", "Cheese", "Peppers"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Prepare the Ingredients:</p>
            <p class="inst-dets">Slice the avocado in half, remove the pit, and scoop out the flesh. Mash it slightly with a fork, adding a pinch of salt and pepper to taste.</p>
        </li>
        <li>
            <p class="inst-title">Cook the Bacon:</p>
            <p class="inst-dets">In a skillet over medium heat, cook the bacon until crispy. Remove from heat and place on a paper towel to drain excess grease.</p>
        </li>
        <li>
            <p class="inst-title">Toast the Bread:</p>
            <p class="inst-dets">Lightly toast two slices of your favorite bread (sourdough, whole grain, or ciabatta work well) until golden and crisp.</p>
        </li>
        <li>
            <p class="inst-title">Assemble the Sandwich:</p>
            <p class="inst-dets">Spread mashed avocado on one slice of toasted bread. Add a few lettuce leaves on top, followed by the crispy bacon slices.</p>
        </li>
        <li>
            <p class="inst-title">Top and Serve:</p>
            <p class="inst-dets">Place the second slice of toasted bread on top. Press gently, slice in half, and enjoy your avocado bacon sandwich with lettuce!</p>
        </li>
    </ol>
`,

                  image: "../images/breaksav1.jpg" 
              },
              {
                  name: "Grilled avocado tuna healthy mixed salad",
                  about: "Grilled avocado tuna mixed salad is a refreshing and nutritious dish, combining tender grilled avocado with protein-rich tuna and fresh mixed greens. This healthy salad offers a perfect balance of creamy, savory, and crisp textures, making it an ideal choice for a wholesome meal.",
                  ingredients: ["Bread", "Avocado", "Salt"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Prepare the Tuna:</p>
            <p class="inst-dets">Drain a can of tuna and place it in a bowl. Add a dash of olive oil, lemon juice, salt, and pepper, then mix to coat the tuna.</p>
        </li>
        <li>
            <p class="inst-title">Grill the Avocado:</p>
            <p class="inst-dets">Slice the avocado in half, remove the pit, and brush each half with olive oil. Place the avocado halves cut-side down on a preheated grill pan over medium heat. Grill for 2-3 minutes until you see light grill marks, then set aside.</p>
        </li>
        <li>
            <p class="inst-title">Prepare the Salad Base:</p>
            <p class="inst-dets">In a large bowl, combine mixed greens (such as spinach, arugula, and lettuce), cherry tomatoes (halved), cucumber slices, and thinly sliced red onions.</p>
        </li>
        <li>
            <p class="inst-title">Add the Tuna and Avocado:</p>
            <p class="inst-dets">Scoop the grilled avocado flesh into chunks or slices and add it to the salad. Add the seasoned tuna on top.</p>
        </li>
        <li>
            <p class="inst-title">Dress the Salad:</p>
            <p class="inst-dets">Drizzle with a simple dressing made from olive oil, lemon juice, a pinch of salt, and freshly ground black pepper. Toss lightly to combine.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Garnish with optional toppings like chia seeds, sliced almonds, or a sprinkle of feta cheese. Serve fresh and enjoy your healthy grilled avocado tuna salad!</p>
        </li>
    </ol>
`,

                  image: "../images/breaksavor2.jpg" 
              }
          ]
      },
      lunch: {
          sweet: [
              {
                  name: "Almonds, passion fruit and quinoa salad",
                  about: "Almonds, passion fruit, and quinoa salad is a vibrant mix of flavors and textures, featuring the nuttiness of almonds, the tropical sweetness of passion fruit, and the wholesome, fluffy base of quinoa. This refreshing salad is both nutritious and satisfying, making it a delightful option for a light yet flavorful meal.",
                  ingredients: ["Mixed fruits"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Cook the Quinoa:</p>
            <p class="inst-dets">Rinse 1 cup of quinoa under cold water, then add it to a pot with 2 cups of water. Bring to a boil, then reduce to a simmer, cover, and cook for 15-20 minutes, or until all water is absorbed. Fluff with a fork and set aside to cool.</p>
        </li>
        <li>
            <p class="inst-title">Prepare the Salad Base:</p>
            <p class="inst-dets">In a large bowl, combine mixed greens, such as spinach and arugula, with thinly sliced cucumber and cherry tomatoes (halved).</p>
        </li>
        <li>
            <p class="inst-title">Add the Passion Fruit:</p>
            <p class="inst-dets">Cut 2 passion fruits in half and scoop out the seeds and pulp. Add them to the salad for a burst of flavor and natural sweetness.</p>
        </li>
        <li>
            <p class="inst-title">Incorporate the Quinoa:</p>
            <p class="inst-dets">Once cooled, add the quinoa to the salad bowl, mixing it gently with the greens and other ingredients.</p>
        </li>
        <li>
            <p class="inst-title">Add Almonds:</p>
            <p class="inst-dets">Sprinkle a handful of sliced almonds over the salad for added crunch and a hint of nutty flavor.</p>
        </li>
        <li>
            <p class="inst-title">Dress the Salad:</p>
            <p class="inst-dets">Drizzle with a simple dressing made from olive oil, lime juice, a pinch of salt, and freshly ground black pepper. Toss lightly to coat the salad evenly.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Garnish with fresh mint leaves if desired, and serve immediately. Enjoy the vibrant flavors and textures!</p>
        </li>
    </ol>
`,

                  image: "../images/lunch1.jpg" 
              },
          ],
          savory: [
              {
                  name: "Veggie burger with red onion, pickles and dressing",
                  about: "The veggie burger with red onion, pickles, and dressing is a deliciously hearty option that combines a flavorful veggie patty with crisp red onions, tangy pickles, and a creamy dressing. Perfectly balanced, this burger is a satisfying plant-based choice packed with fresh, vibrant flavors.",
                  ingredients: ["Chicken", "Bread", "Lettuce"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Prepare the Veggie Patty:</p>
            <p class="inst-dets">In a bowl, combine cooked mashed beans (like black beans or chickpeas), grated carrots, finely chopped mushrooms, breadcrumbs, and seasonings (salt, pepper, garlic powder). Mix until well combined and shape into patties.</p>
        </li>
        <li>
            <p class="inst-title">Cook the Patty:</p>
            <p class="inst-dets">Heat a pan with a little olive oil over medium heat. Cook the veggie patty for 4-5 minutes on each side, or until golden brown and firm. Set aside.</p>
        </li>
        <li>
            <p class="inst-title">Prepare the Toppings:</p>
            <p class="inst-dets">Slice red onions, pickles, and lettuce. Set aside for assembly.</p>
        </li>
        <li>
            <p class="inst-title">Make the Dressing:</p>
            <p class="inst-dets">In a small bowl, mix together mayonnaise, ketchup, a dash of mustard, and a splash of pickle juice. Stir until smooth.</p>
        </li>
        <li>
            <p class="inst-title">Assemble the Burger:</p>
            <p class="inst-dets">Place the veggie patty on the bottom half of a toasted bun. Add the sliced red onion, pickles, and lettuce on top of the patty. Drizzle with the dressing.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Place the top bun over the assembled burger and press down gently. Serve immediately with your favorite sides. Enjoy!</p>
        </li>
    </ol>
`,

                  image: "../images/dinner1.jpg" 
              }
          ]
      },
      dinner: {
          sweet: [
              {
                  name: "Spicy & sweet coriander rice pudding",
                  about: "Spicy & sweet coriander rice pudding offers a unique twist on the classic dessert, blending warm spices and fragrant coriander with creamy rice. The result is a harmonious balance of sweetness with a hint of spice, making it a comforting and flavorful treat.",
                  ingredients: ["Chicken", "Honey", "Spices"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Cook the Rice:</p>
            <p class="inst-dets">In a pot, combine 1 cup of rice with 2 cups of water. Bring to a boil, then reduce to a simmer and cover. Cook for about 15-20 minutes, or until the rice is tender and the water is absorbed.</p>
        </li>
        <li>
            <p class="inst-title">Prepare the Milk Mixture:</p>
            <p class="inst-dets">In a separate saucepan, combine 2 cups of milk, 1/2 cup of sugar, and a pinch of salt. Heat over medium heat until the sugar dissolves, but do not boil.</p>
        </li>
        <li>
            <p class="inst-title">Combine Rice and Milk:</p>
            <p class="inst-dets">Add the cooked rice to the milk mixture. Stir well and let it simmer on low heat for 10-15 minutes, stirring occasionally until it thickens to your desired consistency.</p>
        </li>
        <li>
            <p class="inst-title">Add Spices and Coriander:</p>
            <p class="inst-dets">Stir in 1 teaspoon of ground cardamom, 1 teaspoon of cinnamon, and 1/4 cup of finely chopped fresh coriander. Mix until evenly distributed.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Remove from heat and let it cool slightly. Serve warm or chilled, garnished with extra coriander leaves and a sprinkle of cinnamon if desired.</p>
        </li>
    </ol>
`,

                  image: "../images/dinsweet.jpg" 
              }
          ],
          savory: [
              {
                  name: "Celery soup with carrot, parsley and red pepper",
                  about: "Celery soup with carrot, parsley, and red pepper is a light yet flavorful dish. The fresh, earthy taste of celery is perfectly complemented by the sweetness of carrots, a touch of parsley, and a hint of red pepper, creating a warming, nutritious soup ideal for any season.",
                  ingredients: ["Beef", "Salt", "Pepper"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Prepare the Vegetables:</p>
            <p class="inst-dets">Chop 2 cups of celery, 1 cup of carrots, 1 cup of red bell pepper, and a handful of fresh parsley. Set aside.</p>
        </li>
        <li>
            <p class="inst-title">Sauté the Vegetables:</p>
            <p class="inst-dets">In a large pot, heat 2 tablespoons of olive oil over medium heat. Add the chopped celery, carrots, and red bell pepper. Sauté for about 5-7 minutes, or until the vegetables begin to soften.</p>
        </li>
        <li>
            <p class="inst-title">Add Broth:</p>
            <p class="inst-dets">Pour in 4 cups of vegetable broth. Bring the mixture to a boil, then reduce the heat to a simmer. Cook for 15-20 minutes, or until the vegetables are tender.</p>
        </li>
        <li>
            <p class="inst-title">Blend the Soup:</p>
            <p class="inst-dets">Using an immersion blender, blend the soup until smooth. If you prefer a chunkier texture, blend only half of the soup.</p>
        </li>
        <li>
            <p class="inst-title">Add Parsley:</p>
            <p class="inst-dets">Stir in the chopped parsley and season with salt and pepper to taste. Simmer for an additional 5 minutes to allow the flavors to meld.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Ladle the soup into bowls and garnish with extra parsley or a drizzle of olive oil if desired. Enjoy warm!</p>
        </li>
    </ol>
`,

                  image: "../images/soup.jpg" 
              },
              {
                  name: "Seashells with spinach, basil & ricotta",
                  about: "Seashells with spinach, basil, and ricotta is a comforting, savory dish featuring tender pasta shells filled with a creamy ricotta blend. Fresh spinach and aromatic basil add a delightful herbal note, making each bite rich and satisfying.",
                  ingredients: ["Beef", "Salt", "Pepper"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Cook the Pasta:</p>
            <p class="inst-dets">Bring a large pot of salted water to a boil. Add 12 ounces of seashell pasta and cook according to package instructions until al dente. Drain and set aside.</p>
        </li>
        <li>
            <p class="inst-title">Sauté the Spinach:</p>
            <p class="inst-dets">In a large skillet, heat 2 tablespoons of olive oil over medium heat. Add 3 cups of fresh spinach and sauté until wilted, about 3-4 minutes. Remove from heat and set aside.</p>
        </li>
        <li>
            <p class="inst-title">Mix the Filling:</p>
            <p class="inst-dets">In a bowl, combine the sautéed spinach, 1 cup of ricotta cheese, 1/2 cup of grated Parmesan cheese, 1/4 cup of chopped fresh basil, salt, and pepper to taste. Mix until well combined.</p>
        </li>
        <li>
            <p class="inst-title">Stuff the Seashells:</p>
            <p class="inst-dets">Preheat the oven to 375°F (190°C). Fill each cooked seashell with the ricotta mixture and place them in a baking dish.</p>
        </li>
        <li>
            <p class="inst-title">Prepare the Sauce:</p>
            <p class="inst-dets">In the same skillet, add 1 cup of marinara sauce and heat until warmed through. Pour the sauce over the stuffed seashells in the baking dish.</p>
        </li>
        <li>
            <p class="inst-title">Bake:</p>
            <p class="inst-dets">Sprinkle the top with additional Parmesan cheese. Cover the dish with foil and bake for 20 minutes. Remove the foil and bake for an additional 10 minutes, or until golden and bubbly.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Let the dish cool for a few minutes before serving. Garnish with fresh basil if desired and enjoy your delicious seashells!</p>
        </li>
    </ol>
`,

                  image: "../images/dinn.jpg" 
              }

          ]
      },
      dessert: {
          sweet: [
              {
                  name: "Crème Brûlée with coconut milk and lemon",
                  about: "Crème Brûlée with coconut milk and lemon is a delightful twist on the classic dessert, combining the creamy richness of coconut milk with a zesty lemon flavor. This indulgent treat features a smooth custard base topped with a perfectly caramelized sugar crust, creating a harmonious balance of sweetness and tang that melts in your mouth.",
                  ingredients: ["Chocolate", "Flour", "Sugar"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Prepare the Oven:</p>
            <p class="inst-dets">Preheat your oven to 325°F (160°C). Place 4 ramekins in a baking dish.</p>
        </li>
        <li>
            <p class="inst-title">Mix the Cream:</p>
            <p class="inst-dets">In a saucepan, combine 1 cup of coconut milk, 1 cup of heavy cream, and the zest of 1 lemon. Heat over medium heat until it begins to simmer, then remove from heat.</p>
        </li>
        <li>
            <p class="inst-title">Whisk the Egg Mixture:</p>
            <p class="inst-dets">In a mixing bowl, whisk together 4 large egg yolks, 1/2 cup of sugar, and the juice of 1 lemon until smooth and pale in color.</p>
        </li>
        <li>
            <p class="inst-title">Combine Mixtures:</p>
            <p class="inst-dets">Slowly pour the warm coconut milk mixture into the egg yolk mixture while whisking continuously to prevent curdling. Strain the mixture through a fine sieve to remove any lumps.</p>
        </li>
        <li>
            <p class="inst-title">Bake:</p>
            <p class="inst-dets">Pour the mixture evenly into the prepared ramekins. Fill the baking dish with hot water until it reaches halfway up the sides of the ramekins. Bake for 30-35 minutes or until the edges are set but the center is still slightly jiggly.</p>
        </li>
        <li>
            <p class="inst-title">Cool:</p>
            <p class="inst-dets">Remove the ramekins from the water bath and let them cool to room temperature. Cover with plastic wrap and refrigerate for at least 2 hours or until completely chilled.</p>
        </li>
        <li>
            <p class="inst-title">Caramelize the Sugar:</p>
            <p class="inst-dets">Once chilled, sprinkle a thin, even layer of sugar (about 1 tablespoon per ramekin) over the top of each crème brûlée. Using a kitchen torch, caramelize the sugar until it melts and turns golden brown. If you don't have a torch, broil them in the oven for 1-2 minutes, keeping a close eye to avoid burning.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Allow the caramelized sugar to harden for a few minutes before serving. Enjoy your creamy and zesty Crème Brûlée!</p>
        </li>
    </ol>
`,

                  image: "../images/sweet1-1.jpg" 
              },
              {
                  name: "Fresh sponge cake",
                  about: "Fresh sponge cake is a light and airy dessert known for its delicate texture and subtle sweetness. Made with simple ingredients like flour, eggs, and sugar, this versatile cake can be enjoyed on its own or layered with fresh fruits, whipped cream, or jams. Its spongy crumb makes it an ideal base for various desserts, perfect for any occasion.",
                  ingredients: ["Chocolate", "Flour", "Sugar"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Preheat the Oven:</p>
            <p class="inst-dets">Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</p>
        </li>
        <li>
            <p class="inst-title">Whisk the Eggs:</p>
            <p class="inst-dets">In a large mixing bowl, whisk together 4 large eggs and 1 cup of granulated sugar until the mixture is pale and fluffy (about 5-7 minutes).</p>
        </li>
        <li>
            <p class="inst-title">Add Vanilla:</p>
            <p class="inst-dets">Gently mix in 1 teaspoon of vanilla extract until well combined.</p>
        </li>
        <li>
            <p class="inst-title">Combine Dry Ingredients:</p>
            <p class="inst-dets">In a separate bowl, sift together 1 cup of all-purpose flour and 1 teaspoon of baking powder.</p>
        </li>
        <li>
            <p class="inst-title">Incorporate Dry Ingredients:</p>
            <p class="inst-dets">Gradually fold the dry mixture into the egg mixture using a spatula, being careful not to deflate the batter. Mix until just combined.</p>
        </li>
        <li>
            <p class="inst-title">Add Butter:</p>
            <p class="inst-dets">Melt 1/4 cup of unsalted butter and let it cool slightly. Gently fold the melted butter into the batter until incorporated.</p>
        </li>
        <li>
            <p class="inst-title">Pour into Pans:</p>
            <p class="inst-dets">Divide the batter evenly between the prepared cake pans, smoothing the tops with a spatula.</p>
        </li>
        <li>
            <p class="inst-title">Bake:</p>
            <p class="inst-dets">Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted in the center comes out clean.</p>
        </li>
        <li>
            <p class="inst-title">Cool the Cakes:</p>
            <p class="inst-dets">Once baked, remove the cakes from the oven and let them cool in the pans for 10 minutes. Then, carefully remove them from the pans and transfer to a wire rack to cool completely.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Once cooled, you can frost and decorate the sponge cake as desired. Enjoy your light and fluffy sponge cake!</p>
        </li>
    </ol>
`,

                  image: "../images/dess2.jpg" 
              }
          ],
          savory: [
              {
                  name: "Mini sandwiches with tuna and sweet corn",
                  about: "Mini sandwiches with tuna and sweet corn are delightful bite-sized treats perfect for gatherings or quick snacks. These sandwiches feature a creamy tuna salad mixed with sweet corn, all nestled between soft, fresh bread. Their combination of flavors and textures makes them a favorite among both kids and adults, offering a satisfying and nutritious option that’s easy to prepare and enjoy.",
                  ingredients: ["Various Cheeses"],
                  instructions: `
    <ol>
        <li>
            <p class="inst-title">Prepare the Filling:</p>
            <p class="inst-dets">In a mixing bowl, combine 1 can of drained tuna, 1/2 cup of sweet corn (canned or cooked), 2 tablespoons of mayonnaise, and a dash of salt and pepper. Mix well until combined.</p>
        </li>
        <li>
            <p class="inst-title">Prepare the Bread:</p>
            <p class="inst-dets">Take small slices of bread (white, whole grain, or your choice) and cut them into quarters to create mini sandwich shapes.</p>
        </li>
        <li>
            <p class="inst-title">Assemble the Sandwiches:</p>
            <p class="inst-dets">Spread a generous spoonful of the tuna and sweet corn mixture onto one piece of bread. Top with another piece of bread to create a sandwich. Repeat with the remaining bread and filling.</p>
        </li>
        <li>
            <p class="inst-title">Garnish (Optional):</p>
            <p class="inst-dets">You can add slices of cucumber, lettuce, or tomato to the sandwiches for extra flavor and crunch.</p>
        </li>
        <li>
            <p class="inst-title">Serve:</p>
            <p class="inst-dets">Arrange the mini sandwiches on a serving platter. Enjoy them as a snack, appetizer, or part of a light meal!</p>
        </li>
    </ol>
`,

                  image: "../images/desssav.jpg" 
              }
          ]
      }
  };

  const mealSelect = document.getElementById("mealSelect");
  const typeSelect = document.getElementById("typeSelect");
  const recipesContainer = document.getElementById("recipesContainer");

  function displayRecipes() {
      const selectedMeal = mealSelect.value;
      const selectedType = typeSelect.value;
      const selectedRecipes = recipes[selectedMeal][selectedType];

      recipesContainer.innerHTML = ""; 

      selectedRecipes.forEach(recipe => {
          const recipeCard = document.createElement("div");
          recipeCard.className = "card mb-4 d-flex flex-column align-items-center py-4 px-2 details-resp mx-2 mx-lg-2 mx-md-2 ";
          recipeCard.innerHTML = `
              <img src="${recipe.image}" alt="${recipe.name}" class="card-img-top w-100" style="max-height: 50vh; object-fit: cover;">
              <p class="text-center mt-4 recipename">${recipe.name}</p>
              <button class="btn btn-primary mx-5  w-100 mt-auto recipbtn" onclick="viewRecipe('${selectedMeal}', '${selectedType}', '${recipe.name}')">View Recipe</button>
          `;
          recipesContainer.appendChild(recipeCard);
      });
  }

  window.viewRecipe = function (meal, type, recipeName) {
      localStorage.setItem("selectedRecipe", JSON.stringify(recipes[meal][type].find(r => r.name === recipeName)));
      window.location.href = "../html/recipe-details.html"; 
  };

  mealSelect.addEventListener("change", displayRecipes);
  typeSelect.addEventListener("change", displayRecipes);

  displayRecipes();

  
});
