/*global angular */
'use strict';

angular.module('acctApp')
.controller('valuesCtrl', ['$scope', 'NAV_LINKS', function ($scope, NAV_LINKS) {
  $scope.siteNavLinks = NAV_LINKS.internal;
  $scope.externalNavLinks = NAV_LINKS.external;
  
  $scope.values = [
    {
      name: 'Obsess over customers',
      desc: 'Providing solutions to our customers’ problems is the lifeblood of our business. Right at the essence of this excellent customer service is our relationship with each business partner. We will constantly identify market problems so that we know exactly what kinds of solutions our customers will value most. We go above and beyond by creating a positive emotional experience for our customers.',
    },
    {
      name: 'Be innovative & change the world',
      desc: 'To be a leader, we can never accept the status quo. We can never be comfortable. We are always pushing and improving, learning and growing. We set goals that challenge us, because we know that by stretching to meet them, we’ll go farther than we ever expected. For us, being great today just isn’t good enough. We innovate to change our world.'
    },
    {
      name: 'Let passion & belief drive what we do',
      desc: 'We love Mondays. And you know why? Because we’ve found our dream job—which is helping businesses fulfill their dreams. Our passion for helping businesses and our belief that it’s making a difference in their world is what drives us.'
    },
    {
      name: 'Do what\'s right, rather than what\'s easy',
      desc: 'Integrity is doing the right thing, especially when no one is watching. This isn’t just something we say; it’s how we do business. In our experience, building open and honest relationships takes nothing less than transparency, authenticity, and integrity. Whether inside or outside the workplace, we are proud to say we do what is right.'
    },
    {
      name: 'Stand united: All for one & one for all',
      desc: 'To create more unity at work, we consider ourselves a family. We look out for one another, removing obstacles that might be in the way. We collaborate and listen, and we do not tolerate political games. We’re compassionate and loyal. No jobs are beneath us. When one of us succeeds, we all succeed. And when we fail, we learn from it. We stand united.'
    },
    {
      name: 'Never stop learning',
      desc: 'Accounting and tax regulation are constantly changing and evolving. We will never be satisfied with just understanding the basics. Our commitment to our work recognizes our constant need for growth. Continuing professional education is one of the foundations of our commitment to providing the best service we can.',
    },
    {
      name: 'Maintain a quiet confidence in our abilities',
      desc: 'As a home-grown Boise family, we are proud of our accomplishments and are confident in our ability to succeed, but we don’t want to boast about it. We believe that in the long run, our character and abilities will speak for themselves by producing a great working environment and ultimately winning the trust of our partners. And we look forward to the challenges ahead.',
    },
    {
      name: 'Have a whole lot of fun',
      desc: 'We’re constantly nourishing a fun and winning environment—and it shows. Part of achieving balance is working hard and finding reasons to celebrate. We pride ourselves in the quality of our work, but we know that if our work isn’t inspiring and fun, we’re not doing it right.',
    },
  ];
}]);
