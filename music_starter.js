// -------------------- timing variables --------------------
let BPM = 164;
let beat = (60 / BPM);
let offset = 0.0875;

let firstRun = true;
let globe = [];
let scrollingText = [];
let noiseOverlay = [];
let loading = [];

// -------------------- setting colours --------------------
let white = [0, 0, 100];
let pink = [324, 66, 100];
let purple = [269, 60, 85];
let blue = [192, 70, 87];
let green = [124, 33, 55];
let lime = [92, 41, 70];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // -------------------- general setup --------------------
  colorMode(HSB);
  background(10);
  textFont('Verdana');
  rectMode(CENTER);
  textSize(24);
  noiseDetail(2);

  if (firstRun) {
    // -------------------- images & sequences --------------------
    bg_1 = loadImage('assets/bg/1.png');
    globe.push(loadImage('assets/globe/0.png'));globe.push(loadImage('assets/globe/1.png'));globe.push(loadImage('assets/globe/2.png'));globe.push(loadImage('assets/globe/3.png'));globe.push(loadImage('assets/globe/4.png'));globe.push(loadImage('assets/globe/5.png'));globe.push(loadImage('assets/globe/6.png'));globe.push(loadImage('assets/globe/7.png'));globe.push(loadImage('assets/globe/8.png'));globe.push(loadImage('assets/globe/9.png'));globe.push(loadImage('assets/globe/10.png'));globe.push(loadImage('assets/globe/11.png'));globe.push(loadImage('assets/globe/12.png'));globe.push(loadImage('assets/globe/13.png'));globe.push(loadImage('assets/globe/14.png'));globe.push(loadImage('assets/globe/15.png'));globe.push(loadImage('assets/globe/16.png'));globe.push(loadImage('assets/globe/17.png'));globe.push(loadImage('assets/globe/18.png'));globe.push(loadImage('assets/globe/19.png'));globe.push(loadImage('assets/globe/20.png'));globe.push(loadImage('assets/globe/21.png'));globe.push(loadImage('assets/globe/22.png'));globe.push(loadImage('assets/globe/23.png'));globe.push(loadImage('assets/globe/24.png'));globe.push(loadImage('assets/globe/25.png'));globe.push(loadImage('assets/globe/26.png'));globe.push(loadImage('assets/globe/27.png'));globe.push(loadImage('assets/globe/28.png'));globe.push(loadImage('assets/globe/29.png'));globe.push(loadImage('assets/globe/30.png'));globe.push(loadImage('assets/globe/31.png'));globe.push(loadImage('assets/globe/32.png'));globe.push(loadImage('assets/globe/33.png'));globe.push(loadImage('assets/globe/34.png'));globe.push(loadImage('assets/globe/35.png'));globe.push(loadImage('assets/globe/36.png'));globe.push(loadImage('assets/globe/37.png'));globe.push(loadImage('assets/globe/38.png'));globe.push(loadImage('assets/globe/39.png'));globe.push(loadImage('assets/globe/40.png'));globe.push(loadImage('assets/globe/41.png'));globe.push(loadImage('assets/globe/42.png'));globe.push(loadImage('assets/globe/43.png'));globe.push(loadImage('assets/globe/44.png'));globe.push(loadImage('assets/globe/45.png'));globe.push(loadImage('assets/globe/46.png'));globe.push(loadImage('assets/globe/47.png'));globe.push(loadImage('assets/globe/48.png'));globe.push(loadImage('assets/globe/49.png'));globe.push(loadImage('assets/globe/50.png'));globe.push(loadImage('assets/globe/51.png'));globe.push(loadImage('assets/globe/52.png'));globe.push(loadImage('assets/globe/53.png'));globe.push(loadImage('assets/globe/54.png'));globe.push(loadImage('assets/globe/55.png'));globe.push(loadImage('assets/globe/56.png'));globe.push(loadImage('assets/globe/57.png'));globe.push(loadImage('assets/globe/58.png'));globe.push(loadImage('assets/globe/59.png'));globe.push(loadImage('assets/globe/60.png'));globe.push(loadImage('assets/globe/61.png'));globe.push(loadImage('assets/globe/62.png'));globe.push(loadImage('assets/globe/63.png'));globe.push(loadImage('assets/globe/64.png'));globe.push(loadImage('assets/globe/65.png'));globe.push(loadImage('assets/globe/66.png'));globe.push(loadImage('assets/globe/67.png'));globe.push(loadImage('assets/globe/68.png'));globe.push(loadImage('assets/globe/69.png'));globe.push(loadImage('assets/globe/70.png'));globe.push(loadImage('assets/globe/71.png'));globe.push(loadImage('assets/globe/72.png'));globe.push(loadImage('assets/globe/73.png'));globe.push(loadImage('assets/globe/74.png'));globe.push(loadImage('assets/globe/75.png'));globe.push(loadImage('assets/globe/76.png'));globe.push(loadImage('assets/globe/77.png'));globe.push(loadImage('assets/globe/78.png'));globe.push(loadImage('assets/globe/79.png'));globe.push(loadImage('assets/globe/80.png'));globe.push(loadImage('assets/globe/81.png'));globe.push(loadImage('assets/globe/82.png'));globe.push(loadImage('assets/globe/83.png'));globe.push(loadImage('assets/globe/84.png'));globe.push(loadImage('assets/globe/85.png'));globe.push(loadImage('assets/globe/86.png'));globe.push(loadImage('assets/globe/87.png'));globe.push(loadImage('assets/globe/88.png'));globe.push(loadImage('assets/globe/89.png'));
    noiseOverlay.push(loadImage('assets/bg/noise_0.png'));noiseOverlay.push(loadImage('assets/bg/noise_1.png'));noiseOverlay.push(loadImage('assets/bg/noise_2.png'));noiseOverlay.push(loadImage('assets/bg/noise_3.png'));noiseOverlay.push(loadImage('assets/bg/noise_4.png'));noiseOverlay.push(loadImage('assets/bg/noise_5.png'));noiseOverlay.push(loadImage('assets/bg/noise_6.png'));noiseOverlay.push(loadImage('assets/bg/noise_7.png'));noiseOverlay.push(loadImage('assets/bg/noise_8.png'));noiseOverlay.push(loadImage('assets/bg/noise_9.png'));noiseOverlay.push(loadImage('assets/bg/noise_10.png'));noiseOverlay.push(loadImage('assets/bg/noise_11.png'));
    scrollingText.push(loadImage('assets/text/0.png'));scrollingText.push(loadImage('assets/text/1.png'));scrollingText.push(loadImage('assets/text/2.png'));scrollingText.push(loadImage('assets/text/3.png'));scrollingText.push(loadImage('assets/text/4.png'));scrollingText.push(loadImage('assets/text/5.png'));scrollingText.push(loadImage('assets/text/6.png'));scrollingText.push(loadImage('assets/text/7.png'));scrollingText.push(loadImage('assets/text/8.png'));scrollingText.push(loadImage('assets/text/9.png'));scrollingText.push(loadImage('assets/text/10.png'));scrollingText.push(loadImage('assets/text/11.png'));scrollingText.push(loadImage('assets/text/12.png'));scrollingText.push(loadImage('assets/text/13.png'));scrollingText.push(loadImage('assets/text/14.png'));scrollingText.push(loadImage('assets/text/15.png'));scrollingText.push(loadImage('assets/text/16.png'));scrollingText.push(loadImage('assets/text/17.png'));scrollingText.push(loadImage('assets/text/18.png'));scrollingText.push(loadImage('assets/text/19.png'));scrollingText.push(loadImage('assets/text/20.png'));scrollingText.push(loadImage('assets/text/21.png'));scrollingText.push(loadImage('assets/text/22.png'));scrollingText.push(loadImage('assets/text/23.png'));scrollingText.push(loadImage('assets/text/24.png'));scrollingText.push(loadImage('assets/text/25.png'));scrollingText.push(loadImage('assets/text/26.png'));scrollingText.push(loadImage('assets/text/27.png'));scrollingText.push(loadImage('assets/text/28.png'));scrollingText.push(loadImage('assets/text/29.png'));scrollingText.push(loadImage('assets/text/30.png'));scrollingText.push(loadImage('assets/text/31.png'));scrollingText.push(loadImage('assets/text/32.png'));scrollingText.push(loadImage('assets/text/33.png'));scrollingText.push(loadImage('assets/text/34.png'));scrollingText.push(loadImage('assets/text/35.png'));scrollingText.push(loadImage('assets/text/36.png'));scrollingText.push(loadImage('assets/text/37.png'));scrollingText.push(loadImage('assets/text/38.png'));scrollingText.push(loadImage('assets/text/39.png'));scrollingText.push(loadImage('assets/text/40.png'));scrollingText.push(loadImage('assets/text/41.png'));scrollingText.push(loadImage('assets/text/42.png'));scrollingText.push(loadImage('assets/text/43.png'));scrollingText.push(loadImage('assets/text/44.png'));scrollingText.push(loadImage('assets/text/45.png'));scrollingText.push(loadImage('assets/text/46.png'));scrollingText.push(loadImage('assets/text/47.png'));scrollingText.push(loadImage('assets/text/48.png'));scrollingText.push(loadImage('assets/text/49.png'));scrollingText.push(loadImage('assets/text/50.png'));scrollingText.push(loadImage('assets/text/51.png'));scrollingText.push(loadImage('assets/text/52.png'));scrollingText.push(loadImage('assets/text/53.png'));scrollingText.push(loadImage('assets/text/54.png'));scrollingText.push(loadImage('assets/text/55.png'));scrollingText.push(loadImage('assets/text/56.png'));scrollingText.push(loadImage('assets/text/57.png'));scrollingText.push(loadImage('assets/text/58.png'));scrollingText.push(loadImage('assets/text/59.png'));scrollingText.push(loadImage('assets/text/60.png'));scrollingText.push(loadImage('assets/text/61.png'));scrollingText.push(loadImage('assets/text/62.png'));scrollingText.push(loadImage('assets/text/63.png'));scrollingText.push(loadImage('assets/text/64.png'));scrollingText.push(loadImage('assets/text/65.png'));scrollingText.push(loadImage('assets/text/66.png'));scrollingText.push(loadImage('assets/text/67.png'));scrollingText.push(loadImage('assets/text/68.png'));scrollingText.push(loadImage('assets/text/69.png'));scrollingText.push(loadImage('assets/text/70.png'));scrollingText.push(loadImage('assets/text/71.png'));scrollingText.push(loadImage('assets/text/72.png'));scrollingText.push(loadImage('assets/text/73.png'));scrollingText.push(loadImage('assets/text/74.png'));scrollingText.push(loadImage('assets/text/75.png'));scrollingText.push(loadImage('assets/text/76.png'));scrollingText.push(loadImage('assets/text/77.png'));scrollingText.push(loadImage('assets/text/78.png'));scrollingText.push(loadImage('assets/text/79.png'));scrollingText.push(loadImage('assets/text/80.png'));scrollingText.push(loadImage('assets/text/81.png'));scrollingText.push(loadImage('assets/text/82.png'));scrollingText.push(loadImage('assets/text/83.png'));scrollingText.push(loadImage('assets/text/84.png'));scrollingText.push(loadImage('assets/text/85.png'));scrollingText.push(loadImage('assets/text/86.png'));scrollingText.push(loadImage('assets/text/87.png'));scrollingText.push(loadImage('assets/text/88.png'));scrollingText.push(loadImage('assets/text/89.png'));scrollingText.push(loadImage('assets/text/90.png'));scrollingText.push(loadImage('assets/text/91.png'));scrollingText.push(loadImage('assets/text/92.png'));scrollingText.push(loadImage('assets/text/93.png'));
    loading.push(loadImage('assets/loading/0.png'));loading.push(loadImage('assets/loading/1.png'));loading.push(loadImage('assets/loading/2.png'));loading.push(loadImage('assets/loading/3.png'));loading.push(loadImage('assets/loading/4.png'));loading.push(loadImage('assets/loading/5.png'));loading.push(loadImage('assets/loading/6.png'));loading.push(loadImage('assets/loading/7.png'));loading.push(loadImage('assets/loading/8.png'));loading.push(loadImage('assets/loading/9.png'));loading.push(loadImage('assets/loading/10.png'));loading.push(loadImage('assets/loading/11.png'));loading.push(loadImage('assets/loading/12.png'));loading.push(loadImage('assets/loading/13.png'));loading.push(loadImage('assets/loading/14.png'));loading.push(loadImage('assets/loading/15.png'));loading.push(loadImage('assets/loading/16.png'));loading.push(loadImage('assets/loading/17.png'));loading.push(loadImage('assets/loading/18.png'));
    firstRun = false;
    }

    // -------------------- screen timings --------------------
    if (counter < (128 * beat) + offset) {
      // -------------------- screen 1/3 --------------------
      push();
      stroke(white);
      strokeWeight(3);
      noFill();

      let ellipseSize = 200;
      let ellipseSpacing = ellipseSize / (drum);
      let ellipseSize2 = 100;
      let ellipseSpacing2 = ellipseSize2 / (other);
      let ellipseSize3 = 100;
      let ellipseSpacing3 = ellipseSize2 / (bass);

      stroke(white);
      ellipse(width / 2, height / 2 + 3 * ellipseSpacing, ellipseSize, ellipseSize / 4);
      stroke(purple);
      ellipse(width / 2, height / 2 + 2 * ellipseSpacing, 1.5 * ellipseSize, 1.5 * ellipseSize / 4);
      stroke(white);
      ellipse(width / 2, height / 2 + ellipseSpacing, 2.2 * ellipseSize, 2.2 * ellipseSize / 4);
      stroke(purple);
      ellipse(width / 2, height / 2, 2.7 * ellipseSize, 2.7 * ellipseSize / 4);
      stroke(white);
      ellipse(width / 2, height / 2 - ellipseSpacing, 2.2 * ellipseSize, 2.2 * ellipseSize / 4);
      stroke(purple);
      ellipse(width / 2, height / 2 - 2 * ellipseSpacing, 1.5 * ellipseSize, 1.5 * ellipseSize / 4);
      stroke(white);
      ellipse(width / 2, height / 2 - 3 * ellipseSpacing, ellipseSize, ellipseSize / 4);

      stroke(white);
      ellipse(width / 5, height / 3 + 3 * ellipseSpacing2, ellipseSize2, ellipseSize2 / 4);
      stroke(pink);
      ellipse(width / 5, height / 3 + 2 * ellipseSpacing2, 1.5 * ellipseSize2, 1.5 * ellipseSize2 / 4);
      stroke(white);
      ellipse(width / 5, height / 3 + ellipseSpacing2, 2.2 * ellipseSize2, 2.2 * ellipseSize2 / 4);
      stroke(pink);
      ellipse(width / 5, height / 3, 2.7 * ellipseSize2, 2.7 * ellipseSize2 / 4);
      stroke(white);
      ellipse(width / 5, height / 3 - ellipseSpacing2, 2.2 * ellipseSize2, 2.2 * ellipseSize2 / 4);
      stroke(pink);
      ellipse(width / 5, height / 3 - 2 * ellipseSpacing2, 1.5 * ellipseSize2, 1.5 * ellipseSize2 / 4);
      stroke(white);
      ellipse(width / 5, height / 3 - 3 * ellipseSpacing2, ellipseSize2, ellipseSize2 / 4);

      stroke(white);
      ellipse(width / 5 * 4, height / 3 + 3 * ellipseSpacing3, ellipseSize3, ellipseSize3 / 4);
      stroke(blue);
      ellipse(width / 5 * 4, height / 3 + 2 * ellipseSpacing3, 1.5 * ellipseSize3, 1.5 * ellipseSize3 / 4);
      stroke(white);
      ellipse(width / 5 * 4, height / 3 + ellipseSpacing3, 2.2 * ellipseSize3, 2.2 * ellipseSize3 / 4);
      stroke(blue);
      ellipse(width / 5 * 4, height / 3, 2.7 * ellipseSize3, 2.7 * ellipseSize3 / 4);
      stroke(white);
      ellipse(width / 5 * 4, height / 3 - ellipseSpacing3, 2.2 * ellipseSize3, 2.2 * ellipseSize3 / 4);
      stroke(blue);
      ellipse(width / 5 * 4, height / 3 - 2 * ellipseSpacing3, 1.5 * ellipseSize3, 1.5 * ellipseSize3 / 4);
      stroke(white);
      ellipse(width / 5 * 4, height / 3 - 3 * ellipseSpacing3, ellipseSize3, ellipseSize3 / 4);
      pop();

      // let decimalPartLoading = counter % 0.5;
      var loadingAnimation = int(map(other, 0, 100, 0, 19));
      image(loading[loadingAnimation], 100, height - 250, 150, 150);

      image(bg_1, width / 2, height - height / 4);

    } else if (counter < (256 * beat) + offset) {
      // -------------------- screen 2/3 --------------------
      var vocalFrame = int(map(vocal, 0, 100, 0, 89));
      image(globe[vocalFrame], width / 2 - 200, height / 2 - 200, 400, 400);

      let decimalPartScroll = counter % 3;
      var scrollingTextAnimation = int(map(decimalPartScroll, 0, 3, 0, 94));
      image(scrollingText[scrollingTextAnimation], 0, 0, width, height);

    } else {
      // -------------------- screen 3/3 --------------------
      translate(width / 2, height / 2);
      noStroke();

      var space = 3;

      for (var i = 0; i < 360; i += space) {
        var xoff = map(cos(i), -1, 1, 0, 3);
        var yoff = map(sin(i), -1, 1, 0, 3);

        var drumFrame = int(map(drum, 0, 100, 0, 100));
        var otherFrame = int(map(other, 0, 100, 0, 100));
        var bassFrame = int(map(bass, 0, 100, 0, 100));
        var vocalFrame = int(map(vocal, 0, 100, 0, 100));

        var n = noise(xoff + counter, yoff + counter);
        var h1 = map(n, 0, 1, -100, drumFrame);
        var h2 = map(n, 1, 0, -100, otherFrame);
        var h3 = map(n, 0, 1, -100, bassFrame);
        var h4 = map(n, 1, 0, -100, vocalFrame);

        var thickness = 3;
        var size = 320;

        rotate(space);
        fill(pink);
        rect(size, 0, h1, thickness);
        fill(purple);
        rect(size / 4 * 3, 0, h2, thickness);
        fill(blue);
        rect(size / 4 * 2, 0, h3, thickness);
        fill(green);
        rect(size / 4, 0, h4, thickness);
        fill(lime);
        rect(size / 32, 0, h1, thickness * 4);
      }

      translate(0 - width / 2, 0 - height / 2);
      image(bg_1, 600, 250);

    }

    // -------------------- noise overlay --------------------
    let decimalPartNoise = counter % 1;
    var noiseAnimation = int(map(decimalPartNoise, 0, 1, 0, 12));
    image(noiseOverlay[noiseAnimation], 0, 0, width, height)

    // -------------------- counter --------------------
    // fill(white);
    // let seconds = counter;
    // text(nf(seconds, 1, 2), width - 100, 40);
    }