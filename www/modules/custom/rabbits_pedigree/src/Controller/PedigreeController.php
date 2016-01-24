<?php
/**
 * @file
 * Contains \Drupal\rabbits_pedigree\Controller\ExampleController.
 */

namespace Drupal\rabbits_pedigree\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;
use Drupal\Component\Render\HtmlEscapedText;

class PedigreeController extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  public function pedigreePageView($node_id) {
    $node = $this->entityManager()->getStorage('node')->load($node_id);
    $build = array(
      '#attached' => array(
        'library' => array('rabbits_pedigree/google-charts'),
      ),
      'js' => array(
        '#type' => 'htmltag',
        '#tag' => 'script',
        '#value' => new HtmlEscapedText("
         "),
      ),
      'pedigree' => array(
        '#type' => 'container',
        '#attributes' => array(
          'id' => 'pedigree-chart',
        ),
      ),
      'offspring' => $this->selectBlock($node, 'offspring')
    );
    foreach (array('sire', 'dam') as $relation) {
      $method = 'get' . ucwords($relation);
      $parent = $this->$method($node);
      $build[$relation] = $this->selectBlock($parent, $relation);
      foreach(array('grandsire','granddam') as $grandrelation) {
        $grandmethod = 'get' . ucwords(str_replace('grand', '', $grandrelation));
        $grandparent = $this->$grandmethod($parent);
        $id = "$relation-$grandrelation";
        $build[$id] = $this->selectBlock($grandparent, $id);
        foreach(array('greatgrandsire', 'greatgranddam') as $greatgrandrelation) {
          $greatgrandmethod = 'get' . ucwords(str_replace('greatgrand', '', $greatgrandrelation));
          $greatgrandparent = $this->$greatgrandmethod($grandparent);
          $id = "$relation-$grandrelation-$greatgrandrelation";
          $build[$id] = $this->selectBlock($greatgrandparent, $id);
        }
      }
    }

    return $build;
  }

  protected function getSire($rabbit) {
    if (empty($rabbit)) {
      return NULL;
    }
    $sire = $rabbit->field_sire->entity;
    return $sire;
  }
  protected function getDam($rabbit) {
    if (empty($rabbit)) {
      return NULL;
    }
    $dam = $rabbit->field_dam->entity;
    return $dam;
  }
  protected function selectBlock($rabbit, $relation) {
    if (empty($rabbit)) {
      return array(
        '#type' => 'container',
        '#attributes' => array(
          'class' => 'relation-not-available',
          'id' => $relation,
          'data-rabbit-name' => $rabbit->title->value,
        ),
        'content' => array(
          '#type' => 'markup',
          '#markup' => t('Not Availiable'),
        ),
      );
    }
    else {
      return array(
        '#type' => 'container',
        '#attributes' => array(
          'id' => $relation,
        ),
        'content' => $this->entityManager()->getViewBuilder($rabbit->getEntityTypeId('node'))->view($rabbit, 'pedigree'),
      );
    }
  }

  public function pedigreePageTitle($node_id) {
    return t("Pedigree");
  }
}
